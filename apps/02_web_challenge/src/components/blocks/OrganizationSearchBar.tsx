import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { useOrganization } from '@/hooks/useOrganization';
import { FileRoutesById } from '@/routeTree.gen';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { debounce } from 'lodash';
import { ArrowRightIcon } from 'lucide-react';
import { useId, useMemo, useState } from 'react';

interface OrganizationSearchBarProps {
  from?: keyof FileRoutesById;
}

export function OrganizationSearchBar({
  from = '/',
}: OrganizationSearchBarProps) {
  const navigate = useNavigate({
    from,
  });
  const search = useSearch({
    from,
  });
  const [searchInput, setSearchInput] = useState(() =>
    'q' in search ? search.q : ''
  );
  const freeSearchKey = useId();
  const [currentSearchQuery, setCurrentSearchQuery] = useState('');

  const updateSearchResults = useMemo(
    () => debounce((value: string) => setCurrentSearchQuery(value), 300),
    []
  );

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    updateSearchResults(e.target.value);
  };

  const { data } = useOrganization({
    org: currentSearchQuery,
    sort: 'followers',
    order: 'desc',
    page: 1,
    perPage: 5,
  });

  const submitSearch = (search: string) => {
    navigate({
      to: '/search',
      search: {
        q: search,
      },
    });
  };

  const goToOrganization = (org: string) => {
    navigate({
      to: '/$org',
      params: {
        org: org,
      },
    });
  };

  return (
    <>
      <Command
        className="rounded-lg border md:min-w-[450px] z-50"
        shouldFilter={false}
      >
        <CommandInput
          value={searchInput}
          placeholder="Search for an organization..."
          onChangeCapture={handleSearchInputChange}
        />
        <CommandList>
          {data && searchInput && (
            <>
              <CommandGroup>
                <CommandItem
                  key={freeSearchKey}
                  value={freeSearchKey}
                  className="cursor-pointer flex justify-between"
                  onSelect={() => searchInput && submitSearch(searchInput)}
                >
                  <span>
                    Search for{' '}
                    <span className="font-bold">"{searchInput}"</span>
                  </span>
                  <ArrowRightIcon className="size-4" />
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Organizations">
                {data.items.map((org) => (
                  <CommandItem
                    key={org.id}
                    value={org.login}
                    className="cursor-pointer"
                    onSelect={() => goToOrganization(org.login)}
                  >
                    <Avatar className="size-4">
                      <AvatarImage src={org.avatar_url} />
                      <AvatarFallback>{org.login.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span>{org.login}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </Command>
    </>
  );
}

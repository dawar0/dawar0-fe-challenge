import { TOrganization, TSearchResult } from '@/types/github';
import { useNavigate, useSearch } from '@tanstack/react-router';

import { Pagination } from '@/components/blocks/Pagination';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ListSkeleton from '@/pages/OrganizationSearchPage/components/ListSkeleton';
import OrderDropdown from '@/pages/OrganizationSearchPage/components/OrderDropdown';

interface ListOrganizationsProps {
  orgs: TSearchResult<TOrganization> | undefined;
  isLoading: boolean;
}

export const ListOrganizations = ({
  orgs,
  isLoading,
}: ListOrganizationsProps) => {
  const { q, page, sort, order } = useSearch({
    from: '/search',
  });
  const navigate = useNavigate();

  const handleNext = () => {
    navigate({
      from: '/search',
      search: { page: page + 1, sort, order, q },
    });
  };
  const handlePrevious = () => {
    navigate({
      from: '/search',
      search: { page: page - 1, sort, order, q },
    });
  };

  const handleOrganizationClick = (org: string) => {
    navigate({
      from: '/search',
      to: '/$org',
      params: { org },
    });
  };
  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full p-4">
      {isLoading && <ListSkeleton />}
      {orgs && (
        <>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <p className="text-xl tracking-tighter font-semibold">
                Organizations
              </p>
              <p className="text-sm text-gray-500">
                {orgs.total_count} results
              </p>
            </div>

            <div className="flex items-start justify-end w-full gap-1">
              <OrderDropdown />
            </div>
          </div>
          {orgs.items.length === 0 && (
            <div className="flex w-full items-center justify-center h-full py-10">
              <p className="text-muted-foreground">No organizations found</p>
            </div>
          )}
          <div className="flex flex-col items-start justify-start gap-2 w-full">
            {orgs?.items.map((org) => (
              <div
                key={org.id}
                className="p-4 border border-gray-200 rounded-lg w-full hover:bg-slate-50 cursor-pointer"
                onClick={() => handleOrganizationClick(org.login)}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="static">
                    <AvatarImage src={org.avatar_url} className="size-10" />
                    <AvatarFallback>{org.login.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <p className=" tracking-tighter font-semibold">
                      {org.login}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {orgs.total_count !== 0 && (
            <div className="p-4 w-full flex items-center justify-center">
              <Pagination
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                page={page}
                perPage={10}
                data={orgs}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

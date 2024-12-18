import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  TRepository,
  TRepositorySortOption,
  TSearchResult,
  TSortOrder,
} from '@/types/github';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useParams, useSearch, useNavigate } from '@tanstack/react-router';
import { ArrowRightIcon, AlignJustify } from 'lucide-react';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
interface ListRepositoryTopBarProps {
  data?: TSearchResult<TRepository>;
}

export default function ListRepositoryTopBar({
  data,
}: ListRepositoryTopBarProps) {
  const { org } = useParams({ from: '/$org/' });
  const { repo, sort, order, q } = useSearch({ from: '/$org/' });
  const [searchInput, setSearchInput] = useState(q);
  const navigate = useNavigate();

  const handleSearch = (q: string) => {
    navigate({ from: '/$org', search: { q, page: 1, repo, sort, order } });
  };
  const handleOrder = (order: TSortOrder) => {
    navigate({ from: '/$org', search: { q, page: 1, repo, sort, order } });
  };

  const handleSortOption = (sort: TRepositorySortOption) => {
    navigate({ from: '/$org', search: { q, page: 1, repo, sort, order } });
  };

  const handleClearRepo = () => {
    navigate({ from: '/$org', search: { repo: undefined } });
  };

  const sortOptions: TRepositorySortOption[] = [
    'stars',
    'forks',
    'help-wanted-issues',
    'updated',
  ];
  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="flex flex-col">
        <Breadcrumb>
          <BreadcrumbList className="gap-0">
            <BreadcrumbItem>
              <p
                className="lg:text-xl tracking-tighter font-semibold text-black cursor-pointer"
                onClick={handleClearRepo}
              >
                {org}
              </p>
            </BreadcrumbItem>
            {repo && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              <p className="lg:text-xl tracking-tighter font-semibold text-primary">
                {repo}
              </p>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {data ? (
          <p className="text-sm text-gray-500">{data?.total_count} results</p>
        ) : (
          <Skeleton className="w-16 h-4" />
        )}
      </div>
      <div className="w-1/2 flex items-center justify-start gap-2">
        <Input
          value={searchInput}
          className="w-full text-ellipsis"
          placeholder={`Search "${org}"...`}
          onKeyUp={(e) => {
            if (e.key === 'Enter') handleSearch(searchInput);
          }}
          onChange={(e) => setSearchInput(e.target.value)}
          rightAdornment={
            <button
              className="bg-transparent"
              onClick={() => handleSearch(searchInput)}
            >
              <ArrowRightIcon className="size-4" />
            </button>
          }
        />
        <Popover>
          <PopoverTrigger asChild className="h-full">
            <Button variant="outline" className="h-10">
              <AlignJustify className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 w-48">
            <p className=" font-semibold">Filter by</p>
            <Select value={order} onValueChange={handleOrder}>
              <SelectTrigger>
                <SelectValue placeholder="Order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={handleSortOption}>
              <SelectTrigger className="capitalize">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem
                    value={option}
                    key={option}
                    className="capitalize"
                  >
                    {option.split('-').join(' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

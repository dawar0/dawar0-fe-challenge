import { fetchOrgRepositories } from '@/api/github';
import { TRepositorySortOption } from '@/types/github';
import { useQuery } from '@tanstack/react-query';
import { TSortOrder } from '@/types/github';

interface UseRepositoriesProps {
  org: string;
  q: string;
  page: number;
  perPage: number;
  sort: TRepositorySortOption;
  order: TSortOrder;
}

export function useRepositories({
  org,
  q,
  page,
  perPage,
  sort,
  order,
}: UseRepositoriesProps) {
  return useQuery({
    queryKey: ['orgRepos', org, q, page, perPage, sort, order],
    queryFn: () => fetchOrgRepositories(org, q, page, perPage, sort, order),
    enabled: !!org,
  });
}

import { fetchOrgs } from '@/api/github';
import { TOrganizationSortOption } from '@/types/github';

import { TSortOrder } from '@/types/github';
import { useQuery } from '@tanstack/react-query';

interface UseOrganizationProps {
  org: string;
  sort: TOrganizationSortOption;
  order: TSortOrder;
  page: number;
  perPage: number;
}

export function useOrganization({
  org,
  sort,
  order,
  page,
  perPage,
}: UseOrganizationProps) {
  return useQuery({
    queryKey: ['orgs', org, sort, order, page, perPage],
    queryFn: () => fetchOrgs(org, sort, order, page, perPage),
    enabled: !!org,
  });
}

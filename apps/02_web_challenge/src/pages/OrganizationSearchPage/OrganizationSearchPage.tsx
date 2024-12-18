import { useOrganization } from '@/hooks/useOrganization';
import { ListOrganizations } from '@/pages/OrganizationSearchPage/components/ListOrganization';
import SearchHeading from '@/pages/OrganizationSearchPage/components/SearchHeading';
import { useSearch } from '@tanstack/react-router';
export default function OrganizationSearch() {
  const { q, sort, order, page } = useSearch({
    from: '/search',
  });
  const { data: orgs, isLoading } = useOrganization({
    org: q,
    sort,
    order,
    page,
    perPage: 10,
  });
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <SearchHeading from="/search" />
      <div className="w-full items-start gap-4 md:w-3/4 lg:w-1/2">
        <ListOrganizations orgs={orgs} isLoading={isLoading} />
      </div>
    </div>
  );
}

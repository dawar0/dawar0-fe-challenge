import { useRepositories } from '@/hooks/useRepositories';
import SearchHeading from '@/pages/OrganizationSearchPage/components/SearchHeading';
import ListRepositoryLayout from '@/pages/RepositorySearchPage/components/ListRepositoryLayout';
import { useParams, useSearch } from '@tanstack/react-router';

export default function RepositorySearch() {
  const { org } = useParams({
    from: '/$org/',
  });

  const search = useSearch({
    from: '/$org/',
  });

  const { data, isLoading } = useRepositories({
    org,
    ...search,
    perPage: 10,
  });

  return (
    <div className="flex flex-col size-full">
      <SearchHeading from="/$org/" />
      <ListRepositoryLayout data={data} isLoading={isLoading} />
    </div>
  );
}

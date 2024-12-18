import TableSkeleton from '@/components/blocks/TableSkeleton';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import ListRepository from '@/pages/RepositorySearchPage/components/ListRepository';
import RepoDetailsPage from '@/pages/RepositorySearchPage/components/RepositoryDetailsPage';
import ListRepositoryTopBar from '@/pages/RepositorySearchPage/components/RepositoryTopBar';
import { TRepository, TSearchResult } from '@/types/github';
import { useNavigate, useParams, useSearch } from '@tanstack/react-router';
import { ArrowLeftIcon } from 'lucide-react';
interface ListRepositoryWrapperProps {
  isLoading: boolean;
  data: TSearchResult<TRepository> | undefined;
}

export default function ListRepositoryLayout({
  isLoading,
  data,
}: ListRepositoryWrapperProps) {
  const { repo } = useSearch({ from: '/$org/' });
  const { org } = useParams({ from: '/$org/' });
  const navigate = useNavigate();
  const handleClearRepo = () => {
    navigate({ from: '/$org', search: { repo: undefined } });
  };

  return (
    <div className="w-full flex flex-grow flex-shrink basis-auto h-0 justify-center">
      <div
        className={cn('flex flex-col h-full ', {
          'md:w-3/4 lg:w-1/2': !repo,
          'lg:flex lg:flex-1 hidden': repo,
        })}
      >
        <ListRepositoryTopBar data={data} />
        {isLoading && <TableSkeleton rowCount={10} />}
        {data && data.items.length > 0 && <ListRepository data={data} />}
        {data && data.items.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-muted-foreground">No repositories found</p>
          </div>
        )}
      </div>
      {repo && (
        <div className="w-full min-h-96 gap-2 flex flex-col overflow-y-auto p-4 flex-[2]">
          <Breadcrumb className="lg:hidden">
            <BreadcrumbList>
              <BreadcrumbItem>
                <p
                  className="tracking-tighter font-semibold text-primary cursor-pointer flex items-center gap-2"
                  onClick={handleClearRepo}
                >
                  <ArrowLeftIcon className="size-4" />
                  {org}
                </p>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <p className="tracking-tighter font-semibold text-black">
                  {repo}
                </p>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <RepoDetailsPage />
        </div>
      )}
    </div>
  );
}

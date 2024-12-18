import { Pagination } from '@/components/blocks/Pagination';
import { TRepository, TSearchResult } from '@/types/github';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Code, FolderKanban, Star } from 'lucide-react';

interface ListRepositoryProps {
  data: TSearchResult<TRepository>;
}

export default function ListRepository({ data }: ListRepositoryProps) {
  const navigate = useNavigate();
  const { page, q, repo, order, sort } = useSearch({ from: '/$org/' });

  const handleRowClick = (row: TRepository) => {
    navigate({
      from: '/$org',
      search: { repo: row.name, page, q },
    });
  };

  const handleNext = () => {
    navigate({
      from: '/$org',
      search: { q, page: page + 1, repo, order, sort },
      resetScroll: false,
    });
  };
  const handlePrevious = () => {
    navigate({
      from: '/$org',
      search: { q, page: page - 1, repo, order, sort },
      resetScroll: false,
    });
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-2 overflow-y-auto flex-grow flex-shrink basis-auto h-0 p-4">
      <div className="flex flex-col items-start justify-start w-full gap-2">
        {data &&
          data?.total_count !== 0 &&
          data.items.map((item) => (
            <div
              key={item.id}
              className="p-4 border border-gray-200 rounded-lg w-full hover:bg-slate-50 cursor-pointer"
              onClick={() => handleRowClick(item)}
            >
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium text-black tracking-tighter">
                  {item.name}
                </p>
                <p className=" text-gray-500">{item.description}</p>
                <div className="flex items-center justify-start gap-4">
                  <p className="text-sm text-gray-500 font-semibold flex items-center justify-center gap-1">
                    <Code className="w-3 h-3" />
                    {item.language}
                  </p>
                  <p className="text-sm text-gray-500 font-semibold flex items-center justify-center gap-1">
                    <Star className="w-3 h-3" />
                    {item.stargazers_count} stars
                  </p>
                  <p className="text-sm text-gray-500 font-semibold flex items-center justify-center gap-1">
                    <FolderKanban className="w-3 h-3" />
                    {item.open_issues_count} issues
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      {data && data?.total_count !== 0 && (
        <Pagination<TRepository>
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          page={page}
          perPage={10}
          data={data}
        />
      )}
    </div>
  );
}

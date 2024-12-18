import { Button } from '@/components/ui/button';
import { TSearchResult } from '@/types/github';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps<T> = {
  handleNext: () => void;
  handlePrevious: () => void;
  page: number;
  perPage: number;
  data: TSearchResult<T>;
};

export const Pagination = <T,>({
  handleNext,
  handlePrevious,
  page,
  perPage,
  data,
}: PaginationProps<T>) => {
  return (
    <div className="space-x-2 flex items-center  w-full justify-between">
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrevious}
        disabled={page === 1}
      >
        <ChevronLeft />
      </Button>
      <p className=" text-muted-foreground text-center">
        {data.total_count === 0
          ? 'No results.'
          : `${page} of ${Math.ceil(data.total_count / perPage)}`}
      </p>
      <Button
        variant="outline"
        size="sm"
        onClick={handleNext}
        disabled={page === Math.ceil(data.total_count / perPage)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

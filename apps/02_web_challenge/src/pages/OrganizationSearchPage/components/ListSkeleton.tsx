import TableSkeleton from '@/components/blocks/TableSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function ListSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex flex-col gap-2 w-1/4">
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
        </div>
        <Skeleton className="w-1/4 h-10" />
      </div>
      <TableSkeleton rowCount={10} />
    </div>
  );
}

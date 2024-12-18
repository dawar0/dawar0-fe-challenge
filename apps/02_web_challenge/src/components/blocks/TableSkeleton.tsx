import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface TableSkeletonProps {
  columnCount?: number;
  rowCount?: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({ rowCount = 5 }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-2 p-4">
      {Array.from({ length: rowCount }).map(() => (
        <Skeleton className="h-14 w-full" />
      ))}
    </div>
  );
};

export default TableSkeleton;

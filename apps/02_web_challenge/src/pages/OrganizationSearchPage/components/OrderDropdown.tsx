import { ArrowDownIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TOrganizationSortOption } from '@/types/github';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { ArrowUpIcon } from 'lucide-react';

export default function OrderDropdown() {
  const { q, sort, order } = useSearch({
    from: '/search',
  });
  const navigate = useNavigate();
  const handleSort = (value: TOrganizationSortOption) => {
    navigate({
      from: '/search',
      search: { page: 1, sort: value, order, q },
    });
  };
  const handleOrder = () => {
    navigate({
      from: '/search',
      search: { page: 1, sort, order: order === 'asc' ? 'desc' : 'asc', q },
    });
  };
  const TOrganizationSortOption: TOrganizationSortOption[] = [
    'followers',
    'repositories',
    'joined',
  ];
  return (
    <>
      <Select
        value={sort}
        onValueChange={(value: TOrganizationSortOption) => {
          handleSort(value);
        }}
      >
        <SelectTrigger className="w-1/2 lg:w-1/6 text-sm capitalize">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          {TOrganizationSortOption.map((option) => (
            <SelectItem value={option} className="capitalize">
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="outline" size="icon" onClick={handleOrder}>
        {order === 'asc' ? (
          <ArrowUpIcon className="size-4" />
        ) : (
          <ArrowDownIcon className="size-4" />
        )}
      </Button>
    </>
  );
}

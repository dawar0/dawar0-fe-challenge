import { Heading } from '@/components/blocks/Heading';
import { OrganizationSearchBar } from '@/components/blocks/OrganizationSearchBar';
import { FileRoutesById } from '@/routeTree.gen';

interface SearchHeadingProps {
  from: keyof FileRoutesById;
}

export default function SearchHeading({ from }: SearchHeadingProps) {
  return (
    <div className="flex w-full gap-4 items-center justify-start p-4">
      <div>
        <Heading size="sm" />
      </div>
      <div className="relative flex-grow h-11">
        <div className="absolute top-0 left-0 w-full">
          <OrganizationSearchBar from={from} />
        </div>
      </div>
    </div>
  );
}

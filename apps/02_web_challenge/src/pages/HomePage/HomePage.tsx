import { Heading } from '@/components/blocks/Heading';

import { OrganizationSearchBar } from '@/components/blocks/OrganizationSearchBar';

export default function HomePage() {
  return (
    <div
      className={
        'flex flex-col w-full items-center justify-center min-h-screen p-10 gap-4'
      }
    >
      <Heading className="text-center" />
      <div className="relative w-fit h-11">
        <div className="flex gap-2 absolute top-0 left-0 -translate-x-1/2">
          <OrganizationSearchBar />
        </div>
      </div>
    </div>
  );
}

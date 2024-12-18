import RepositorySearch from '@/pages/RepositorySearchPage/RepositorySearchPage';
import { createFileRoute } from '@tanstack/react-router';
import { zodValidator } from '@tanstack/zod-adapter';
import { z } from 'zod';
import { TRepositorySortOption, TSortOrder } from '@/types/github';

const repoSearchSchema = z.object({
  q: z.string().default(''),
  sort: z.custom<TRepositorySortOption>().default('stars'),
  page: z.number().default(1),
  order: z.custom<TSortOrder>().default('desc'),
  repo: z.string().default(''),
});

export const Route = createFileRoute('/$org/')({
  component: RepositorySearch,
  validateSearch: zodValidator(repoSearchSchema),
});

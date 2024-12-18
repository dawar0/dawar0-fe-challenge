import OrganizationSearch from '@/pages/OrganizationSearchPage/OrganizationSearchPage';
import { createFileRoute } from '@tanstack/react-router';
import { zodValidator } from '@tanstack/zod-adapter';
import { z } from 'zod';
const repoSearchSchema = z.object({
  q: z.string().default(''),
  sort: z.enum(['followers', 'repositories', 'joined']).default('followers'),
  order: z.enum(['asc', 'desc']).default('desc'),
  page: z.number().default(1),
});

export const Route = createFileRoute('/search')({
  component: OrganizationSearch,
  validateSearch: zodValidator(repoSearchSchema),
});

import { fetchRepositoryContents, fetchRepositoryDetails } from '@/api/github';
import { useQuery } from '@tanstack/react-query';

interface UseRepositoryProps {
  org: string;
  repo: string;
}

interface UseRepositoryContentsProps {
  org: string;
  repo: string;
  path: string;
}

export function useRepository({ org, repo }: UseRepositoryProps) {
  return useQuery({
    queryKey: ['repository', org, repo],
    queryFn: () => fetchRepositoryDetails(org, repo),
    enabled: !!org && !!repo,
  });
}

export function useRepositoryContents({
  org,
  repo,
  path,
}: UseRepositoryContentsProps) {
  return useQuery({
    queryKey: ['repository', org, repo, path],
    queryFn: () => fetchRepositoryContents(org, repo, path),
    enabled: !!org && !!repo && !!path,
  });
}

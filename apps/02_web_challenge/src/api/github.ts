import axios from 'axios';
import {
  TOrganizationSortOption,
  TRepository,
  TRepositoryDetails,
  TRepositorySortOption,
  TSearchResult,
  TSortOrder,
  TOrganization,
  TRepositoryContent,
} from '@/types/github';

const GITHUB_API_URL = 'https://api.github.com';

const axiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

export async function fetchOrgRepositories(
  org: string,
  q: string,
  page: number,
  perPage: number,
  sort: TRepositorySortOption,
  order: TSortOrder
): Promise<TSearchResult<TRepository>> {
  const response = await axiosInstance.get<TSearchResult<TRepository>>(
    `search/repositories?q=${q} org:${org}`,
    {
      params: { page, per_page: perPage, sort, order },
    }
  );
  return response.data;
}

export async function fetchRepositoryDetails(
  org: string,
  repo: string
): Promise<TRepositoryDetails> {
  const response = await axiosInstance.get<TRepositoryDetails>(
    `repos/${org}/${repo}`
  );
  return response.data;
}

export async function fetchRepositoryContents(
  org: string,
  repo: string,
  path: string
): Promise<TRepositoryContent> {
  const response = await axiosInstance.get<TRepositoryContent>(
    `repos/${org}/${repo}/contents/${path}`
  );
  return response.data;
}

export async function fetchOrgs(
  org: string,
  sort: TOrganizationSortOption,
  order: TSortOrder,
  page: number,
  perPage: number
): Promise<TSearchResult<TOrganization>> {
  const response = await axiosInstance.get<TSearchResult<TOrganization>>(
    `search/users?q=${org} type:org`,
    {
      params: { page, per_page: perPage, sort, order },
    }
  );
  return response.data;
}

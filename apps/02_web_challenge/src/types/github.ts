export interface TRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  updated_at: string;
}
export type TRepositoryDetails = TRepository & {
  allow_forking: boolean;
  archived: boolean;
  clone_url: string;
  created_at: string;
  default_branch: string;
  disabled: boolean;
  fork: boolean;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string | null;
  is_template: boolean;
  license: {
    key: string;
    name: string;
    spdx_id: string;
  } | null;
  mirror_url: string | null;
  network_count: number;
  private: boolean;
  pushed_at: string;
  size: number;
  subscribers_count: number;
  topics: string[];
  visibility: string;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
};

export type TRepositorySortOption =
  | 'stars'
  | 'forks'
  | 'help-wanted-issues'
  | 'updated';

export type TOrganizationSortOption = 'followers' | 'repositories' | 'joined';
export type TSortOrder = 'asc' | 'desc';

export type TSearchResult<T> = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<T>;
};

export type TOrganization = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
  following_url: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  site_admin: boolean;
  user_view_type: string;
};

export type TOrganizationDetails = TOrganization & {
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string; // ISO 8601 date-time format
  updated_at?: string; // ISO 8601 date-time format
  name?: string | null;
  bio?: string | null;
  email?: string | null;
  location?: string | null;
  hireable?: boolean | null;
  text_matches?: Array<TSearchTextMatch>;
  blog?: string | null;
  company?: string | null;
  suspended_at?: string | null; // ISO 8601 date-time format
};

export type TSearchTextMatch = {
  object_url: string;
  object_type: string | null;
  property: string;
  fragment: string;
  matches: Array<TMatch>;
};

export type TMatch = {
  text: string;
  indices: Array<number>;
};

export type TRepositoryContent = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
};

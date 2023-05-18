export interface User {
  avatarUrl: string;
  id: number;
  login: string;
}

export interface UserDetails extends User {
  bio: string | null;
  blog: string | null;
  company: string | null;
  createdAt: string;
  email: string | null;
  followers: number;
  followersUrl: string;
  following: number;
  hireable: boolean | null;
  location: string | null;
  name: string | null;
  publicRepos: number;
  publicGists: number;
  reposUrl: string;
  twitterUsername: string | null;
  updatedAt: string;
}

export interface UserDetailsStatistic {
  title: string;
  field: keyof UserDetails;
  backgroundColor: string;
}

export interface UserDto {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string | null;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface UserDetailsDto extends UserDto {
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
  email: string | null;
  followers: number;
  following: number;
  hireable: boolean | null;
  location: string | null;
  name: string | null;
  public_repos: number;
  public_gists: number;
  twitter_username: string | null;
  updated_at: string;
}

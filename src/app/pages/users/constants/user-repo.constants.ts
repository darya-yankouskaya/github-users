import { UserRepoStatistic } from '../models/user-repo.model';

export const USER_REPO_DATA: ReadonlyArray<UserRepoStatistic> = [
  {
    title: 'Forks: ',
    field: 'forksCount',
    backgroundColor: 'var(--info-bar-color-1)',
  },
  {
    title: 'Open Issues: ',
    field: 'openIssuesCount',
    backgroundColor: 'var(--info-bar-color-2)',
  },
  {
    title: 'Stargazers: ',
    field: 'stargazersCount',
    backgroundColor: 'var(--info-bar-color-3)',
  },
  {
    title: 'Watchers: ',
    field: 'watchersCount',
    backgroundColor: 'var(--info-bar-color-4)',
  },
];

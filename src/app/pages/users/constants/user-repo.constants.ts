import { UserRepoStatistic } from '../models/user-repo.model';

export const USER_REPO_DATA: ReadonlyArray<UserRepoStatistic> = [
  {
    title: 'Forks: ',
    field: 'forksCount',
    backgroundColor: 'rgb(149 112 236)',
  },
  {
    title: 'Open Issues: ',
    field: 'openIssuesCount',
    backgroundColor: 'rgb(33 229 166)',
  },
  {
    title: 'Stargazers: ',
    field: 'stargazersCount',
    backgroundColor: 'rgb(165 165 165)',
  },
  {
    title: 'Watchers: ',
    field: 'watchersCount',
    backgroundColor: 'rgb(188 143 207)',
  },
];

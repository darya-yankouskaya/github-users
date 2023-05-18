import { UserDetailsStatistic } from '../models/user.model';

export const USER_STATISTIC_DATA: ReadonlyArray<UserDetailsStatistic> = [
  {
    title: 'Puplic Repos: ',
    field: 'publicRepos',
    backgroundColor: 'rgb(134 95 223)',
  },
  {
    title: 'Puplic Gists: ',
    field: 'publicGists',
    backgroundColor: 'rgb(33 229 166)',
  },
  {
    title: 'Puplic Followers: ',
    field: 'followers',
    backgroundColor: 'rgb(165 165 165)',
  },
  {
    title: 'Puplic Following: ',
    field: 'following',
    backgroundColor: 'rgb(188 143 207)',
  },
];

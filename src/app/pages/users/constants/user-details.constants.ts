import { UserDetailsStatistic, UserMainInfoData } from '../models/user.model';

export const USER_STATISTIC_DATA: ReadonlyArray<UserDetailsStatistic> = [
  {
    title: 'Puplic Repos: ',
    field: 'publicRepos',
    backgroundColor: 'rgb(149 112 236)',
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

export const USER_MAIN_INFO_DATA: ReadonlyArray<UserMainInfoData> = [
  {
    title: 'Github Url: ',
    field: 'htmlUrl',
  },
  {
    title: 'Company: ',
    field: 'company',
  },
  {
    title: 'Location: ',
    field: 'location',
  },
  {
    title: 'Blog: ',
    field: 'blog',
  },
  {
    title: 'Member Since: ',
    field: 'createdAt',
  },
];

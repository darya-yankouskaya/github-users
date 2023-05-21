import { UserDetailsStatistic, UserMainInfoData } from '../models/user.model';

export const USER_STATISTIC_DATA: ReadonlyArray<UserDetailsStatistic> = [
  {
    title: 'Puplic Repos: ',
    field: 'publicRepos',
    backgroundColor: 'var(--info-bar-color-1)',
  },
  {
    title: 'Puplic Gists: ',
    field: 'publicGists',
    backgroundColor: 'var(--info-bar-color-2)',
  },
  {
    title: 'Puplic Followers: ',
    field: 'followers',
    backgroundColor: 'var(--info-bar-color-3)',
  },
  {
    title: 'Puplic Following: ',
    field: 'following',
    backgroundColor: 'var(--info-bar-color-4)',
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

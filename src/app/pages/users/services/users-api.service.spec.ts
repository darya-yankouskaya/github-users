import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UsersApiService } from './users-api.service';
import {
  User,
  UserDetails,
  UserDetailsDto,
  UserDto,
  UserSearchDto,
} from '../models/user.model';
import { of } from 'rxjs';
import { UserRepoVisibility } from '../enums/user-repo.enum';
import { UserRepo, UserRepoDto } from '../models/user-repo.model';

describe('UsersApiService', () => {
  const USER_DTO_MOCK: UserDto = {
    avatar_url: 'www.test.jpg',
    events_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    gravatar_id: null,
    html_url: '',
    id: 1,
    login: 'user1',
    node_id: '',
    organizations_url: '',
    repos_url: '',
    received_events_url: '',
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    type: '',
    url: '',
  };
  const USER_DETAILS_DTO_MOCK: UserDetailsDto = {
    ...USER_DTO_MOCK,
    bio: null,
    blog: null,
    company: null,
    created_at: '',
    email: null,
    followers: 1,
    following: 1,
    hireable: null,
    location: null,
    name: null,
    public_repos: 1,
    public_gists: 1,
    twitter_username: null,
    updated_at: '',
  };
  const USER_MOCK: User = {
    avatarUrl: 'www.test.jpg',
    id: 1,
    login: 'user1',
  };
  const USER_DETAILS_MOCK: UserDetails = {
    ...USER_MOCK,
    bio: null,
    blog: null,
    company: null,
    createdAt: '',
    email: null,
    followers: 1,
    followersUrl: '',
    following: 1,
    hireable: null,
    htmlUrl: '',
    location: null,
    name: null,
    publicRepos: 1,
    publicGists: 1,
    reposUrl: '',
    twitterUsername: null,
    updatedAt: '',
  };
  const USERS_MOCK: User[] = [USER_MOCK];
  const USERS_RESPONSE_MOCK: UserSearchDto = {
    incomplete_results: false,
    items: [USER_DTO_MOCK],
    total_count: 1,
  };
  const USER_REPO_MOCK: UserRepo = {
    description: '',
    id: 1,
    forksCount: 1,
    language: null,
    name: '',
    openIssuesCount: 1,
    stargazersCount: 1,
    updatedAt: '',
    htmlUrl: '',
    visibility: UserRepoVisibility.Private,
    watchersCount: 1,
  };
  const USER_REPO_DTO_MOCK: Partial<UserRepoDto> = {
    description: '',
    id: 1,
    forks_count: 1,
    language: null,
    name: '',
    open_issues_count: 1,
    stargazers_count: 1,
    updated_at: '',
    html_url: '',
    visibility: UserRepoVisibility.Private,
    watchers_count: 1,
  };
  let userService: UsersApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UsersApiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return expected users', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(USERS_RESPONSE_MOCK));

    userService.getUsers('name').subscribe({
      next: users => {
        expect(users).toEqual(USERS_MOCK);
        done();
      },
    });
  });

  it('should return user details', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(USER_DETAILS_DTO_MOCK));

    userService
      .getUserDetailsByUsername(USER_DETAILS_DTO_MOCK.login)
      .subscribe({
        next: details => {
          expect(details).toEqual(USER_DETAILS_MOCK);
          done();
        },
      });
  });

  it('should return user followers', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of([USER_DTO_MOCK]));

    userService.getUserFollowers('').subscribe({
      next: users => {
        expect(users).toEqual(USERS_MOCK);
        done();
      },
    });
  });

  it('should return user repos', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of([USER_REPO_DTO_MOCK]));

    userService.getUserRepos('').subscribe({
      next: repos => {
        expect(repos).toEqual([USER_REPO_MOCK]);
        done();
      },
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UserDetailsComponent } from './user-details.component';
import {
  selectUserDetails,
  selectUserFollowers,
  selectUserRepos,
} from '../../store/users.selectors';
import { User, UserDetails } from '../../models/user.model';
import { UserRepo } from '../../models/user-repo.model';
import { UserRepoVisibility } from '../../enums/user-repo.enum';
import { SharedModule } from '../../../../shared/shared.module';
import { NoDataFoundComponent } from 'src/app/shared/components/no-data-found/no-data-found.component';
import { UsersState } from '../../store/users.state';
import { MemoizedSelector, Store } from '@ngrx/store';

@Component({
  selector: 'app-user-details-info',
})
class UserDetailsInfoComponent {
  @Input({ required: true }) userDetails!: UserDetails;
}

@Component({
  selector: 'app-user-followers',
})
class UserFollowersComponent {
  @Input({ required: true }) followers!: User[];
}

@Component({
  selector: 'app-user-repos',
})
class UserReposComponent {
  @Input({ required: true }) repos!: UserRepo[];
}

describe('UserDetailsComponent', () => {
  const USER_DETAILS_MOCK: UserDetails = {
    avatarUrl: 'www.test.jpg',
    bio: '',
    blog: null,
    company: null,
    createdAt: new Date().toISOString(),
    email: null,
    followers: 1,
    followersUrl: 'www.test.com',
    following: 1,
    hireable: null,
    htmlUrl: 'www.test.com',
    id: 1,
    location: null,
    login: 'test',
    name: 'User Name',
    publicRepos: 1,
    publicGists: 1,
    reposUrl: 'www.test.com',
    twitterUsername: null,
    updatedAt: new Date().toISOString(),
  };
  const FOLLOWERS_MOCK: User[] = [
    {
      avatarUrl: 'www.test.jpg',
      id: 1,
      login: 'user1',
    },
    {
      avatarUrl: 'www.test2.jpg',
      id: 2,
      login: 'user2',
    },
  ];
  const REPOS_MOCK: UserRepo[] = [
    {
      description: '',
      id: 1,
      forksCount: 1,
      language: 'Javascript',
      name: 'Name',
      openIssuesCount: 1,
      stargazersCount: 1,
      updatedAt: new Date().toISOString(),
      htmlUrl: 'www.test.com',
      visibility: UserRepoVisibility.Private,
      watchersCount: 1,
    },
  ];
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let mockStore: MockStore<UsersState>;
  let mockSelectUserFollowers: MemoizedSelector<UsersState, User[]>;
  let mockSelectUserRepos: MemoizedSelector<UsersState, UserRepo[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDetailsComponent,
        UserDetailsInfoComponent,
        UserFollowersComponent,
        UserReposComponent,
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectUserDetails,
              value: USER_DETAILS_MOCK,
            },
          ],
        }),
      ],
      imports: [RouterTestingModule, SharedModule],
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store<UsersState>) as MockStore<UsersState>;
    mockSelectUserFollowers = mockStore.overrideSelector(
      selectUserFollowers,
      [],
    );
    mockSelectUserRepos = mockStore.overrideSelector(selectUserRepos, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user details info', () => {
    const userDetailsComponent: UserDetailsInfoComponent =
      fixture.debugElement.query(
        By.directive(UserDetailsInfoComponent),
      ).componentInstance;

    expect(userDetailsComponent).toBeTruthy();
    expect(userDetailsComponent.userDetails).toEqual(USER_DETAILS_MOCK);
  });

  it('should render followers title', () => {
    const elem: HTMLElement = fixture.nativeElement.querySelector(
      'h2.user-details__title--followers',
    );

    expect(elem.textContent).toContain('Followers');
  });

  it('should render repos title', () => {
    const elem: HTMLElement = fixture.nativeElement.querySelector(
      'h2.user-details__title--repos',
    );

    expect(elem.textContent).toContain('Repositories');
  });

  it('should render no data found or user followers', () => {
    const followersDE = fixture.debugElement.query(
      By.css('.user-details__followers'),
    );
    const noDataDE = followersDE.query(By.directive(NoDataFoundComponent));

    expect(noDataDE).toBeTruthy();

    mockSelectUserFollowers.setResult(FOLLOWERS_MOCK);
    mockStore.refreshState();
    fixture.detectChanges();

    const userFollowers: UserFollowersComponent = fixture.debugElement.query(
      By.directive(UserFollowersComponent),
    ).componentInstance;

    expect(userFollowers).toBeTruthy();
    expect(userFollowers.followers).toEqual(FOLLOWERS_MOCK);
  });

  it('should render no data found or user repos', () => {
    const followersDE = fixture.debugElement.query(
      By.css('.user-details__repos'),
    );
    const noDataDE = followersDE.query(By.directive(NoDataFoundComponent));

    expect(noDataDE).toBeTruthy();

    mockSelectUserRepos.setResult(REPOS_MOCK);
    mockStore.refreshState();
    fixture.detectChanges();

    const userRepos: UserReposComponent = fixture.debugElement.query(
      By.directive(UserReposComponent),
    ).componentInstance;

    expect(userRepos).toBeTruthy();
    expect(userRepos.repos).toEqual(REPOS_MOCK);
  });
});

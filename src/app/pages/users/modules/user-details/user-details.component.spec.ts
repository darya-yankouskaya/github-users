import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { UserDetailsComponent } from './user-details.component';
import {
  selectUserDetails,
  selectUserFollowers,
  selectUserRepos,
} from '../../store/users.selectors';
import { User, UserDetails } from '../../models/user.model';
import { UserRepo } from '../../models/user-repo.model';
import { UserRepoVisibility } from '../../enums/user-repo.enum';

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
            {
              selector: selectUserFollowers,
              value: FOLLOWERS_MOCK,
            },
            {
              selector: selectUserRepos,
              value: REPOS_MOCK,
            },
          ],
        }),
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
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

  it("should render all user's followers", () => {
    const followersDE = fixture.debugElement.query(
      By.directive(UserFollowersComponent),
    );

    expect(followersDE).toBeTruthy();
    expect(followersDE.componentInstance.followers).toEqual(FOLLOWERS_MOCK);
  });

  it("should render all user's repo", () => {
    const repossDE = fixture.debugElement.query(
      By.directive(UserReposComponent),
    );

    expect(repossDE).toBeTruthy();
    expect(repossDE.componentInstance.repos).toEqual(REPOS_MOCK);
  });
});

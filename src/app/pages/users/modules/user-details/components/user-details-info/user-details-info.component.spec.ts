import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsInfoComponent } from './user-details-info.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { UserDetails } from 'src/app/pages/users/models/user.model';

const USER_DETAILS_MOCK: UserDetails = {
  avatarUrl: 'www.test.jpg',
  bio: null,
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
  name: null,
  publicRepos: 1,
  publicGists: 1,
  reposUrl: 'www.test.com',
  twitterUsername: null,
  updatedAt: new Date().toISOString(),
};

describe('UserDetailsInfoComponent', () => {
  let component: UserDetailsInfoComponent;
  let fixture: ComponentFixture<UserDetailsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsInfoComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(UserDetailsInfoComponent);
    component = fixture.componentInstance;
    component.userDetails = USER_DETAILS_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

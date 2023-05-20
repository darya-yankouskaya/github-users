import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { UserFollowersComponent } from './user-followers.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { User } from '../../../../models/user.model';
import { UserCardComponent } from '../../../../../../shared/components/user-card/user-card.component';

describe('UserFollowersComponent', () => {
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

  let component: UserFollowersComponent;
  let fixture: ComponentFixture<UserFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFollowersComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(UserFollowersComponent);
    component = fixture.componentInstance;
    component.followers = FOLLOWERS_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all followers with user card and provide right data', () => {
    const listItemsDE = fixture.debugElement.queryAll(
      By.css('.user-followers__list-item'),
    );

    expect(listItemsDE.length).toEqual(component.followers.length);

    listItemsDE.forEach((el, i) => {
      const userCard: UserCardComponent = el.query(
        By.directive(UserCardComponent),
      ).componentInstance;
      const follower = component.followers[i];

      expect(userCard.avatarUrl).toBe(follower.avatarUrl);
      expect(userCard.login).toBe(follower.login);
    });
  });

  it("should have links for all followers and contain follower's login", () => {
    const followersList = fixture.debugElement.query(
      By.css('.user-followers__list'),
    );
    const routerLinksDE = followersList.queryAll(By.directive(RouterLink));
    const links = routerLinksDE.map(el => el.injector.get(RouterLink));

    expect(links.length).toBe(component.followers.length);

    links.forEach((link, i) => {
      expect(link.href).toBe(`/${component.followers[i].login}`);
      expect(link.queryParamsHandling).toBe('merge');
    });
  });
});

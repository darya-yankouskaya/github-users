import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserDetailsInfoComponent } from './user-details-info.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { UserDetails } from '../../../../models/user.model';
import { InfoBarComponent } from '../../../../../../shared/components/info-bar/info-bar.component';
import { UserCardComponent } from '../../../../../../shared/components/user-card/user-card.component';
import {
  findAllElementsByCss,
  findDebugElementByCss,
  findDirective,
  findElementByCss,
} from '../../../../../../shared/utils/testing.helpers';

describe('UserDetailsInfoComponent', () => {
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

  it('should render h1 element', () => {
    const h1 = findElementByCss(fixture, 'h1')!;

    expect(h1.textContent).toBe('User Details');
  });

  it('should render h2 with user name', () => {
    const h2 = findElementByCss(fixture, 'h2.user-details-info__title')!;

    expect(h2.textContent).toContain(component.userDetails.name);
  });

  it('should render user card', () => {
    const cardComponent = findDirective(fixture, UserCardComponent)!;

    expect(cardComponent).toBeTruthy();
    expect(cardComponent.avatarUrl).toEqual(component.userDetails.avatarUrl);
    expect(cardComponent.description).toEqual(component.userDetails.bio);
    expect(cardComponent.login).toEqual(component.userDetails.login);
    expect(cardComponent.priority).toBeTrue();
  });

  it('should show all statictics with right data', () => {
    const statisticsList = findDebugElementByCss(
      fixture,
      '.user-details-info__statistic-list',
    )!;
    const infoBars = statisticsList.queryAll(By.directive(InfoBarComponent));

    expect(infoBars.length).toBe(component.statisticsData.length);

    const firstBar: InfoBarComponent = infoBars[0].componentInstance;
    const firstStatistic = component.statisticsData[0];

    expect(firstBar.info).toBe(
      firstStatistic.title + component.userDetails[firstStatistic.field],
    );
  });

  it('should show all main user info', () => {
    const mainInfoList = findAllElementsByCss(
      fixture,
      '.user-details-info__info-list-item',
    );

    expect(mainInfoList.length).toBe(component.userMainInfoData.length);
  });
});

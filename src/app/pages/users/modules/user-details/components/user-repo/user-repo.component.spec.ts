import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserRepoComponent } from './user-repo.component';
import { UserRepo } from '../../../../models/user-repo.model';
import { UserRepoVisibility } from '../../../../enums/user-repo.enum';
import { SharedModule } from '../../../../../../shared/shared.module';
import { InfoBarComponent } from '../../../../../../shared/components/info-bar/info-bar.component';

describe('UserRepoComponent', () => {
  let component: UserRepoComponent;
  let fixture: ComponentFixture<UserRepoComponent>;

  beforeEach(() => {
    const REPO_MOCK: UserRepo = {
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
    };

    TestBed.configureTestingModule({
      declarations: [UserRepoComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(UserRepoComponent);
    component = fixture.componentInstance;
    component.repo = REPO_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user name in h3 title', () => {
    const h3: HTMLElement = fixture.nativeElement.querySelector(
      'h3.user-repo__user-name',
    );

    expect(h3.textContent).toContain(component.repo.name);
  });

  it('should show repo visibility correctly', () => {
    const visibilityElem: HTMLElement = fixture.nativeElement.querySelector(
      '.user-repo__visibility',
    );
    const visibility = component.repo.visibility;
    const value = visibility.replace(
      visibility[0],
      visibility[0].toUpperCase(),
    );

    expect(visibilityElem.textContent).toContain(value);
  });

  it('should have a link to the repo and open it in a new tab', () => {
    const link: HTMLAnchorElement =
      fixture.nativeElement.querySelector('.user-repo__link');

    expect(link.href).toContain(component.repo.htmlUrl);
    expect(link.target).toEqual('_blank');
  });

  it('should render all repo statistic with info bars', () => {
    const listItemsDE = fixture.debugElement.queryAll(
      By.css('.user-repo__statistic-item'),
    );

    expect(listItemsDE.length).toBe(component.userRepoData.length);

    listItemsDE.forEach((listItemDE, i) => {
      const infoBar: InfoBarComponent = listItemDE.query(
        By.directive(InfoBarComponent),
      ).componentInstance;
      const data = component.userRepoData[i];

      expect(infoBar).toBeTruthy();
      expect(infoBar.info).toEqual(data.title + component.repo[data.field]);
    });
  });
});

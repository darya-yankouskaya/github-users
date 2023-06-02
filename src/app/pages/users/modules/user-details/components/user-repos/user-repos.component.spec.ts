import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { UserReposComponent } from './user-repos.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { UserRepoVisibility } from '../../../../enums/user-repo.enum';
import { UserRepo } from '../../../../models/user-repo.model';
import {
  findAllDebugElementsByDirective,
  findElementByCss,
} from '../../../../../../shared/utils/testing.helpers';
import { UserRepoComponent } from '../user-repo/user-repo.component';

@Component({
  selector: 'app-user-repo',
})
class FakeUserRepoComponent implements Partial<UserRepoComponent> {
  @Input({ required: true }) repo!: UserRepo;
}

describe('UserReposComponent', () => {
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
  const getReposMock = (count: number) =>
    new Array(count).fill(null).map((_, i) => ({
      ...REPO_MOCK,
      id: i,
    }));
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserReposComponent, FakeUserRepoComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all user repos and provide repo data', () => {
    component.repos = getReposMock(component.maxCount);
    fixture.detectChanges();

    const repoComponents = findAllDebugElementsByDirective(
      fixture,
      FakeUserRepoComponent,
    );

    expect(repoComponents.length).toEqual(component.visibleRepos.length);

    repoComponents.forEach((repoComponent, i) => {
      expect(repoComponent.componentInstance.repo).toEqual(
        component.visibleRepos[i],
      );
    });
  });

  it('should show all repos on show all button click', () => {
    component.repos = getReposMock(component.maxCount + 1);
    fixture.detectChanges();

    const btn = findElementByCss(fixture, 'button.user-repos__show-all-btn')!;

    expect(component.visibleRepos.length).not.toEqual(
      component.allRepos.length,
    );

    btn.click();
    fixture.detectChanges();

    expect(component.visibleRepos).toEqual(component.allRepos);
  });

  it('should not render show all button if there are few repos', () => {
    component.repos = getReposMock(component.maxCount - 1);
    fixture.detectChanges();

    const btn = findElementByCss(fixture, 'button.user-repos__show-all-btn')!;

    expect(btn).toBeNull();
  });
});

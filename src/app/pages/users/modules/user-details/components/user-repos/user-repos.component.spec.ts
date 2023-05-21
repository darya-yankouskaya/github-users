import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { UserReposComponent } from './user-repos.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { UserRepoVisibility } from '../../../../enums/user-repo.enum';
import { UserRepo } from '../../../../models/user-repo.model';

@Component({
  selector: 'app-user-repo',
})
class UserRepoComponent {
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
  const REPOS_MOCK: UserRepo[] = new Array(6).fill(null).map((_, i) => ({
    ...REPO_MOCK,
    id: i,
  }));

  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserReposComponent, UserRepoComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    component.repos = REPOS_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all user repos and provide repo data', () => {
    const repoComponents = fixture.debugElement.queryAll(
      By.directive(UserRepoComponent),
    );

    expect(repoComponents.length).toEqual(component.visibleRepos.length);

    repoComponents.forEach((repoComponent, i) => {
      expect(repoComponent.componentInstance.repo).toEqual(
        component.visibleRepos[i],
      );
    });
  });

  it('should show all repos on show all button click', () => {
    const btn = fixture.nativeElement.querySelector(
      'button.user-repos__show-all-btn',
    );

    expect(component.visibleRepos.length).not.toEqual(
      component.allRepos.length,
    );

    btn.click();
    fixture.detectChanges();

    expect(component.visibleRepos).toEqual(component.allRepos);
  });
});

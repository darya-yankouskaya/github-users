import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepoComponent } from './user-repo.component';
import { UserRepo } from '../../../../models/user-repo.model';
import { UserRepoVisibility } from '../../../../enums/user-repo.enum';
import { SharedModule } from '../../../../../../shared/shared.module';

const TEST_REPO: UserRepo = {
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

describe('UserRepoComponent', () => {
  let component: UserRepoComponent;
  let fixture: ComponentFixture<UserRepoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRepoComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(UserRepoComponent);
    component = fixture.componentInstance;
    component.repo = TEST_REPO;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

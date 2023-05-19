import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposComponent } from './user-repos.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserReposComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

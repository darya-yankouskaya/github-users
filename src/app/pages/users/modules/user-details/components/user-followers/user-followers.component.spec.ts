import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowersComponent } from './user-followers.component';
import { SharedModule } from '../../../../../../shared/shared.module';

describe('UserFollowersComponent', () => {
  let component: UserFollowersComponent;
  let fixture: ComponentFixture<UserFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFollowersComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(UserFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

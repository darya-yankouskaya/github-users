import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowersComponent } from './user-followers.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserFollowersComponent', () => {
  let component: UserFollowersComponent;
  let fixture: ComponentFixture<UserFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFollowersComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(UserFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { UsersListComponent } from './users-list.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-users-search',
})
class UsersSearchComponent {}

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent, UsersSearchComponent],
      imports: [SharedModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

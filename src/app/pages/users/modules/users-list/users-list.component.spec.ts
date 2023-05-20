import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLink } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { UsersListComponent } from './users-list.component';
import { SharedModule } from '../../../../shared/shared.module';
import { UsersState } from '../../store/users.state';
import { selectUsers } from '../../store/users.selectors';
import { User } from '../../models/user.model';
import { NoDataFoundComponent } from '../../../../shared/components/no-data-found/no-data-found.component';
import { UserCardComponent } from '../../../../shared/components/user-card/user-card.component';

@Component({
  selector: 'app-users-search',
})
class UsersSearchComponent {}

describe('UsersListComponent', () => {
  const USERS_MOCK: User[] = [
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
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let mockStore: MockStore<UsersState>;
  let mockSelectUsers: MemoizedSelector<UsersState, User[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent, UsersSearchComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store<UsersState>) as MockStore<UsersState>;
    mockSelectUsers = mockStore.overrideSelector(selectUsers, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page h1 title', () => {
    const elem = fixture.nativeElement.querySelector('h1.user-list__title');

    expect(elem).toBeTruthy();
  });

  it('should render user search component', () => {
    const searchDE = fixture.debugElement.query(
      By.directive(UsersSearchComponent),
    );

    expect(searchDE).toBeTruthy();
  });

  it('should render no data found or user lists', () => {
    const noDataDE = fixture.debugElement.query(
      By.directive(NoDataFoundComponent),
    );

    expect(noDataDE).toBeTruthy();

    mockSelectUsers.setResult(USERS_MOCK);
    mockStore.refreshState();
    fixture.detectChanges();

    const usersDE = fixture.debugElement.queryAll(By.css('.user-list__item'));

    expect(usersDE.length).toEqual(USERS_MOCK.length);
  });

  it('should render user cards and routerLink for each card', () => {
    mockSelectUsers.setResult(USERS_MOCK);
    mockStore.refreshState();
    fixture.detectChanges();

    const linksDE = fixture.debugElement.queryAll(By.directive(RouterLink));

    linksDE.forEach((linkDE, i) => {
      expect(linkDE.nativeElement.href).toContain(USERS_MOCK[i].login);
      const userCard: UserCardComponent = linkDE.query(
        By.directive(UserCardComponent),
      ).componentInstance;

      expect(userCard).toBeTruthy();
      expect(userCard.avatarUrl).toEqual(USERS_MOCK[i].avatarUrl);
    });
  });
});

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersState } from '../../store/users.state';
import { getUsers } from '../../store/users.actions';
import { selectFilteredUsers } from '../../store/users.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  public users$ = this.store.select(selectFilteredUsers);

  constructor(private store: Store<UsersState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }
}

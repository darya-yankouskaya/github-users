import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersState } from '../../store/users.state';
import { selectFilteredUsers } from '../../store/users.selectors';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  public users$ = this.store.select(selectFilteredUsers);

  constructor(private store: Store<UsersState>) {}

  public userTrackBy(index: number, user: User) {
    return user.id;
  }
}

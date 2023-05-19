import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UsersState } from '../../store/users.state';
import { Store } from '@ngrx/store';
import { getUserDetails, resetSelectedUser } from '../../store/users.actions';
import {
  selectUserDetails,
  selectUserFollowers,
  selectUserRepos,
} from '../../store/users.selectors';
import { USER_STATISTIC_DATA } from '../../constants/user-details.constants';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  public readonly statisticsData = USER_STATISTIC_DATA;
  public userDetails$ = this.store.select(selectUserDetails);
  public userFollowers$ = this.store.select(selectUserFollowers);
  public userRepos$ = this.store.select(selectUserRepos);

  constructor(private store: Store<UsersState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUserDetails());
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetSelectedUser());
  }
}

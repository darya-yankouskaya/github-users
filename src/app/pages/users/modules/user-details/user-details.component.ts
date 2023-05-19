import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { UsersState } from '../../store/users.state';
import { getUserDetails, resetSelectedUser } from '../../store/users.actions';
import {
  selectUserDetails,
  selectUserFollowers,
  selectUserRepos,
} from '../../store/users.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  public userDetails$ = this.store.select(selectUserDetails);
  public userFollowers$ = this.store.select(selectUserFollowers);
  public userRepos$ = this.store.select(selectUserRepos);

  constructor(
    private store: Store<UsersState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(take(1))
      .subscribe(() => this.store.dispatch(getUserDetails()));
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetSelectedUser());
  }
}

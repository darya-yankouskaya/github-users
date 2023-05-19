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
import { ActivatedRoute } from '@angular/router';
import { untilDestroy } from '../../../../shared/utils/until-destroy';

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
  private destroy = untilDestroy();

  constructor(
    private store: Store<UsersState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.subscribeOnUserChange();
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetSelectedUser());
  }

  private subscribeOnUserChange(): void {
    this.route.params.pipe(this.destroy()).subscribe(() => {
      this.store.dispatch(resetSelectedUser());
      this.store.dispatch(getUserDetails());
    });
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, take } from 'rxjs';
import { UsersState } from '../../store/users.state';
import { getUsers } from '../../store/users.actions';
import { selectFilteredUsers } from '../../store/users.selectors';
import { untilDestroy } from '../../../../shared/utils/until-destroy';
import { QueryParams } from '../../../../shared/enums/query-params.enum';
import { selectQueryParams } from 'src/app/shared/store/router/router.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  public readonly searchPlaceholder = 'Search...';
  public searchControl = new FormControl('', { nonNullable: true });
  public users$ = this.store.select(selectFilteredUsers);
  private untilDestroy = untilDestroy();

  constructor(
    private store: Store<UsersState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.checkInitSearchValue();
    this.subscribeOnSearchChange();
  }

  private subscribeOnSearchChange(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), this.untilDestroy())
      .subscribe(query => {
        this.router.navigate([''], {
          queryParams: {
            [QueryParams.Name]: query || null,
          },
          relativeTo: this.route,
        });
      });
  }

  private checkInitSearchValue(): void {
    this.store
      .select(selectQueryParams)
      .pipe(take(1))
      .subscribe(queryParams => {
        const query = queryParams[QueryParams.Name];

        if (query) {
          this.searchControl.setValue(query, { emitEvent: false });
        }
      });
  }
}

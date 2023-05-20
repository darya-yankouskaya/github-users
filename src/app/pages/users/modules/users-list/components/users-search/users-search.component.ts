import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, take } from 'rxjs';
import { getUsers } from '../../../../store/users.actions';
import { UsersState } from '../../../../store/users.state';
import { QueryParams } from '../../../../../../shared/enums/query-params.enum';
import { selectQueryParams } from '../../../../../../shared/store/router/router.selectors';
import { untilDestroy } from '../../../../../../shared/utils/until-destroy';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchComponent implements OnInit {
  public readonly searchPlaceholder = 'Search...';
  public searchControl = new FormControl('', { nonNullable: true });
  private untilDestroy = untilDestroy();

  constructor(
    private store: Store<UsersState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.subscribeOnSearchChange();
    this.checkInitSearchValue();
  }

  public resetSearchControl(): void {
    this.searchControl.reset();
  }

  private subscribeOnSearchChange(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged(), this.untilDestroy())
      .subscribe(query => {
        this.router.navigate([''], {
          queryParams: {
            [QueryParams.Name]: query || null,
          },
          relativeTo: this.route,
        });
        this.store.dispatch(getUsers({ payload: query }));
      });
  }

  private checkInitSearchValue(): void {
    this.store
      .select(selectQueryParams)
      .pipe(take(1))
      .subscribe(queryParams => {
        const query = queryParams[QueryParams.Name];

        if (query) {
          this.searchControl.setValue(query);
        }
      });
  }
}

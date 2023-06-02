import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedState } from './shared/store/shared.state';
import {
  selectIsDarkMode,
  selectIsSpinnerVisible,
} from './shared/store/shared.selectors';
import { routerAnimation } from './shared/constants/router.animation';
import { setTheme, toggleTheme } from './shared/store/shared.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routerAnimation],
})
export class AppComponent implements OnInit {
  public isSpinnerVisible$ = this.store.select(selectIsSpinnerVisible);
  public isDarkMode$ = this.store.select(selectIsDarkMode);

  constructor(private store: Store<SharedState>) {}

  ngOnInit(): void {
    this.store.dispatch(setTheme());
  }

  public toggleTheme(): void {
    this.store.dispatch(toggleTheme());
  }
}

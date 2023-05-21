import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsDarkMode } from '../../../../shared/store/shared.selectors';
import { SharedState } from '../../../../shared/store/shared.state';
import { setTheme, toggleTheme } from '../../../../shared/store/shared.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public isDarkMode$ = this.store.select(selectIsDarkMode);

  constructor(private store: Store<SharedState>) {}

  ngOnInit(): void {
    this.store.dispatch(setTheme());
  }

  public toggleTheme(): void {
    this.store.dispatch(toggleTheme());
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedState } from './shared/store/shared.state';
import { selectIsSpinnerVisible } from './shared/store/shared.selectors';
import { routerAnimation } from './shared/constants/router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routerAnimation],
})
export class AppComponent {
  public isSpinnerVisible$ = this.store.select(selectIsSpinnerVisible);

  constructor(private store: Store<SharedState>) {}
}

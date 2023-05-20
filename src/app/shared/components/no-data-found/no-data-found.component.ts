import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-data-found',
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoDataFoundComponent {}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBarComponent {
  @Input({ required: true }) info!: string;
}

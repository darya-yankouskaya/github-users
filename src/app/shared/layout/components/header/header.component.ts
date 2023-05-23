import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input({ required: true }) isDarkMode!: boolean;

  @Output() toggleTheme = new EventEmitter<void>();

  public onToggleThemeClick(): void {
    this.toggleTheme.emit();
  }
}

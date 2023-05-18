import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { untilDestroy } from 'src/app/shared/utils/until-destroy';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public themeControl = new FormControl(false, { nonNullable: true });
  private untilDestroy = untilDestroy();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.subscribeOnThemeChange();
  }

  private subscribeOnThemeChange(): void {
    this.themeControl.valueChanges
      .pipe(startWith(false), this.untilDestroy())
      .subscribe(isDark => {
        this.renderer.setAttribute(
          this.document.body,
          'class',
          `${isDark ? 'theme-dark' : 'theme-light'} mat-app-background`,
        );
      });
  }
}

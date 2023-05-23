import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatSlideToggleHarness } from '@angular/material/slide-toggle/testing';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../../shared.module';
import { findDebugElementByCss } from '../../../../shared/utils/testing.helpers';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        MatToolbarModule,
        MatSlideToggleModule,
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.isDarkMode = false;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have home button with routerlink', () => {
    const linkDE = findDebugElementByCss(fixture, '.header__home-link')!;

    expect(linkDE).toBeTruthy();

    const routerLink = linkDE.injector.get(RouterLink);

    expect(routerLink.queryParamsHandling).toBe('merge');
    expect(routerLink.href).toBe('/');
  });

  it('should emit toggleTheme on toggle click', async () => {
    const toggle = await loader.getHarness(MatSlideToggleHarness);
    const spy = spyOn(component.toggleTheme, 'emit');

    await toggle.toggle();

    expect(spy).toHaveBeenCalled();
  });

  it('should use isDarkMode value for toggle checked', async () => {
    const toggle = await loader.getHarness(MatSlideToggleHarness);

    expect(await toggle.isChecked()).toBe(component.isDarkMode);
  });
});

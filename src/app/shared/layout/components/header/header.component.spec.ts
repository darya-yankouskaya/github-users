import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatSlideToggleHarness } from '@angular/material/slide-toggle/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../../shared.module';
import { SharedState } from '../../../../shared/store/shared.state';
import { selectIsDarkMode } from '../../../../shared/store/shared.selectors';
import { setTheme, toggleTheme } from '../../../../shared/store/shared.actions';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockStore: MockStore<SharedState>;
  let mockSelectIsDarkMode: MemoizedSelector<SharedState, boolean>;
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
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    mockStore = TestBed.inject(Store<SharedState>) as MockStore<SharedState>;
    mockSelectIsDarkMode = mockStore.overrideSelector(selectIsDarkMode, false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have home button with routerlink', () => {
    const linkDE = fixture.debugElement.query(By.css('.header__home-link'));

    expect(linkDE).toBeTruthy();

    const routerLink = linkDE.injector.get(RouterLink);

    expect(routerLink.queryParamsHandling).toBe('merge');
    expect(routerLink.href).toBe('/');
  });

  it('should change toggle checked value on selector change', async () => {
    const toggle = await loader.getHarness(MatSlideToggleHarness);

    expect(await toggle.isChecked()).toBeFalse();

    mockSelectIsDarkMode.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(await toggle.isChecked()).toBeTrue();
  });

  it('should dispatch toggleTheme action on toggle click', async () => {
    const store = TestBed.inject(Store<SharedState>);
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    const toggle = await loader.getHarness(MatSlideToggleHarness);

    await toggle.toggle();

    expect(dispatchSpy).toHaveBeenCalledWith(toggleTheme());
  });

  it('should dispatch setTheme in OnInit hook', async () => {
    const store = TestBed.inject(Store<SharedState>);
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    component.ngOnInit();

    expect(dispatchSpy).toHaveBeenCalledWith(setTheme());
  });
});

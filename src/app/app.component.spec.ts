import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { SharedState } from './shared/store/shared.state';
import {
  selectIsDarkMode,
  selectIsSpinnerVisible,
} from './shared/store/shared.selectors';
import { setTheme, toggleTheme } from './shared/store/shared.actions';
import { HeaderComponent } from './shared/layout/components/header/header.component';
import {
  findDebugElementByDirective,
  findDirective,
} from './shared/utils/testing.helpers';

@Component({
  selector: 'app-header',
})
class FakeHeaderComponent implements Partial<HeaderComponent> {
  @Input({ required: true }) isDarkMode!: boolean;

  @Output() toggleTheme = new EventEmitter<void>();
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockStore: MockStore<SharedState>;
  let mockSelectIsSpinnerVisible: MemoizedSelector<SharedState, boolean>;
  let mockSelectIsDarkMode: MemoizedSelector<SharedState, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
      ],
      declarations: [AppComponent, FakeHeaderComponent],
      providers: [provideMockStore()],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store<SharedState>) as MockStore<SharedState>;
    mockSelectIsSpinnerVisible = mockStore.overrideSelector(
      selectIsSpinnerVisible,
      false,
    );
    mockSelectIsDarkMode = mockStore.overrideSelector(selectIsDarkMode, false);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    const header = fixture.debugElement.query(
      By.directive(FakeHeaderComponent),
    );

    expect(header).toBeTruthy();
  });

  it('should render router outlet', () => {
    const outlet = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(outlet).toBeTruthy();
  });

  it('should show/hide spinner', () => {
    mockSelectIsSpinnerVisible.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();

    let spinner = findDebugElementByDirective(fixture, MatProgressSpinner);

    expect(spinner).toBeTruthy();

    mockSelectIsSpinnerVisible.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();

    spinner = findDebugElementByDirective(fixture, MatProgressSpinner);

    expect(spinner).toBeNull();
  });

  it('should dispatch setTheme in OnInit hook', () => {
    const store = TestBed.inject(Store<SharedState>);
    const dispatchSpy = spyOn(store, 'dispatch');

    component.ngOnInit();

    expect(dispatchSpy).toHaveBeenCalledWith(setTheme());
  });

  it('should dispatch toggleTheme', () => {
    const store = TestBed.inject(Store<SharedState>);
    const dispatchSpy = spyOn(store, 'dispatch');
    const header = findDirective(fixture, FakeHeaderComponent);

    header!.toggleTheme.emit();

    expect(dispatchSpy).toHaveBeenCalledWith(toggleTheme());
  });

  it('should provide to header theme mode', () => {
    const header = findDirective(fixture, FakeHeaderComponent);

    expect(header!.isDarkMode).toBeFalse();

    mockSelectIsDarkMode.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(header!.isDarkMode).toBeTrue();
  });
});

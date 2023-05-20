import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { SharedState } from './shared/store/shared.state';
import { selectIsSpinnerVisible } from './shared/store/shared.selectors';

@Component({
  selector: 'app-header',
})
class HeaderComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockStore: MockStore<SharedState>;
  let mockSelectIsSpinnerVisible: MemoizedSelector<SharedState, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
      ],
      declarations: [AppComponent, HeaderComponent],
      providers: [provideMockStore()],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store<SharedState>) as MockStore<SharedState>;
    mockSelectIsSpinnerVisible = mockStore.overrideSelector(
      selectIsSpinnerVisible,
      false,
    );
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    const header = fixture.debugElement.query(By.directive(HeaderComponent));

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

    let spinner = fixture.debugElement.query(By.directive(MatProgressSpinner));

    expect(spinner).toBeTruthy();

    mockSelectIsSpinnerVisible.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();

    spinner = fixture.debugElement.query(By.directive(MatProgressSpinner));

    expect(spinner).toBeFalsy();
  });
});

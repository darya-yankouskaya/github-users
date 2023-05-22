import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { UsersSearchComponent } from './users-search.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { selectQueryParams } from '../../../../../../shared/store/router/router.selectors';

describe('UsersSearchComponent', () => {
  let component: UsersSearchComponent;
  let fixture: ComponentFixture<UsersSearchComponent>;
  const MOCK_QUERY_PARAMS = { name: 'Name' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSearchComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectQueryParams,
              value: MOCK_QUERY_PARAMS,
            },
          ],
        }),
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    });
    fixture = TestBed.createComponent(UsersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component title', () => {
    const elem = fixture.nativeElement.querySelector('h2.users-search__title');

    expect(elem).toBeTruthy();
  });

  it('should navigate on search query change', async () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector(
      'input.users-search__search-input',
    );
    input.value = 'Name';
    input.dispatchEvent(new Event('input'));

    const router = TestBed.inject(Router);
    const store = TestBed.inject(Store);
    const routerSpy = spyOn(router, 'navigate');
    const storeSpy = spyOn(store, 'dispatch');

    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(component.searchControl.value).toEqual(input.value);
      expect(routerSpy).toHaveBeenCalled();
      expect(storeSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should assign the init search value from query params', () => {
    expect(component.searchControl.value).toEqual(MOCK_QUERY_PARAMS.name);
  });

  it('should reset search control value on reset button click', async () => {
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button.users-search__reset-btn',
    );

    btn.click();

    await fixture
      .whenStable()
      .then(() => expect(component.searchControl.value).toBe(''));
  });
});

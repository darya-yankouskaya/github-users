import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { SharedState } from '../../shared/store/shared.state';
import { showErrorMessage } from '../../shared/store/shared.actions';

describe('HttpErrorInterceptor', () => {
  let interceptor: HttpErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorInterceptor, provideMockStore()],
      imports: [HttpClientTestingModule],
    });
    interceptor = TestBed.inject(HttpErrorInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should dispatch showErrorMessage if error occurs', () => {
    const store = TestBed.inject(Store<SharedState>);
    const storeSpy = spyOn(store, 'dispatch');
    const httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['']);
    const httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    httpHandlerSpy.handle.and.returnValue(
      throwError({
        error: { message: 'test-error' },
      }),
    );
    interceptor.intercept(httpRequestSpy, httpHandlerSpy).subscribe({
      error: error => {
        expect(storeSpy).toHaveBeenCalledWith(
          showErrorMessage({
            payload: {
              title: 'Error',
              message: error.message,
            },
          }),
        );
      },
    });
  });
});

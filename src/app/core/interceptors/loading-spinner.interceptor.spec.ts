import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { LoadingSpinnerInterceptor } from './loading-spinner.interceptor';
import { SharedState } from '../../shared/store/shared.state';

describe('LoadingSpinnerInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LoadingSpinnerInterceptor, provideMockStore()],
    }),
  );

  it('should be created', () => {
    const interceptor: LoadingSpinnerInterceptor = TestBed.inject(
      LoadingSpinnerInterceptor,
    );
    expect(interceptor).toBeTruthy();
  });

  it('expects "intercept" to fire handleRequest', (done: DoneFn) => {
    const interceptor: LoadingSpinnerInterceptor = TestBed.inject(
      LoadingSpinnerInterceptor,
    );
    const handler = {
      handle: (req: HttpRequest<unknown>) => {
        return of(new HttpResponse(req));
      },
    };
    const request = new HttpRequest('GET', '');
    const store = TestBed.inject(Store<SharedState>);
    const storeSpy = spyOn(store, 'dispatch');

    interceptor.intercept(request, handler);

    expect(storeSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        payload: true,
      }),
    );
    done();
  });
});

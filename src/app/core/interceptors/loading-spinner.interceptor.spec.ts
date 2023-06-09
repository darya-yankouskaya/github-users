import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { finalize, of } from 'rxjs';
import { LoadingSpinnerInterceptor } from './loading-spinner.interceptor';
import { SharedState } from '../../shared/store/shared.state';
import { changeSpinnerVisibility } from '../../shared/store/shared.actions';

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

  it('expects "intercept" to dispatch show/hide spinner', (done: DoneFn) => {
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

    const res = interceptor.intercept(request, handler);

    expect(storeSpy).toHaveBeenCalledWith(
      changeSpinnerVisibility({ payload: true }),
    );

    res
      .pipe(
        finalize(() => {
          expect(storeSpy).toHaveBeenCalledWith(
            changeSpinnerVisibility({ payload: false }),
          );
        }),
      )
      .subscribe();

    done();
  });
});

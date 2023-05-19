import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { Store } from '@ngrx/store';
import { SharedState } from '../../shared/store/shared.state';
import { changeSpinnerVisibility } from '../../shared/store/shared.actions';

@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor {
  private requestsAmount = 0;

  constructor(private store: Store<SharedState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.requestsAmount++;
    this.store.dispatch(changeSpinnerVisibility({ payload: true }));

    return next.handle(request).pipe(
      finalize(() => {
        this.requestsAmount--;

        if (!this.requestsAmount) {
          this.store.dispatch(changeSpinnerVisibility({ payload: false }));
        }
      }),
    );
  }
}

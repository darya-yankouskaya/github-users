import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { SharedState } from '../../shared/store/shared.state';
import { showErrorMessage } from 'src/app/shared/store/shared.actions';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<SharedState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(
          showErrorMessage({
            payload: {
              title: 'Error',
              message: error.message,
            },
          }),
        );
        return throwError(() => error);
      }),
    );
  }
}

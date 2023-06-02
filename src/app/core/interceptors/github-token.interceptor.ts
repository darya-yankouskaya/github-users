import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class GithubTokenInterceptor implements HttpInterceptor {
  private readonly githubToken = environment.githubToken;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes(environment.githubAPI) && this.githubToken) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          `Bearer ${this.githubToken}`,
        ),
      });
    }

    return next.handle(request);
  }
}

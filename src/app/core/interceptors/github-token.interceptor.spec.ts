import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GithubTokenInterceptor } from './github-token.interceptor';
import { environment } from '../../../environments/environment';

describe('GithubTokenInterceptor', () => {
  let interceptor: GithubTokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubTokenInterceptor],
    });

    interceptor = TestBed.inject(GithubTokenInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add token for github urls', () => {
    const handler = {
      handle: (req: HttpRequest<unknown>) => {
        return of(new HttpResponse(req));
      },
    };
    const request = new HttpRequest('GET', 'https://api.github.com/users');
    const resp$ = interceptor.intercept(request, handler) as Observable<
      HttpResponse<unknown>
    >;

    resp$.subscribe(v => {
      const token = v.headers.get('Authorization');
      expect(token).toContain(environment.githubToken);
    });
  });
});

import { TestBed } from '@angular/core/testing';

import { GithubTokenInterceptor } from './github-token.interceptor';

describe('GithubTokenInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [GithubTokenInterceptor],
    }),
  );

  it('should be created', () => {
    const interceptor: GithubTokenInterceptor = TestBed.inject(
      GithubTokenInterceptor,
    );
    expect(interceptor).toBeTruthy();
  });
});

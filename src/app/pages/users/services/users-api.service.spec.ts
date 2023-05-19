import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UsersApiService } from './users-api.service';

describe('UsersApiService', () => {
  let service: UsersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UsersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

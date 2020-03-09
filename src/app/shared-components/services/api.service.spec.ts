import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', inject([ApiService], () => {
    expect(service).toBeTruthy();
  }));
});

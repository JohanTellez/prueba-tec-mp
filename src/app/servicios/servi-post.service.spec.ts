import { TestBed } from '@angular/core/testing';

import { ServiPostService } from './servi-post.service';

describe('ServiPostService', () => {
  let service: ServiPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

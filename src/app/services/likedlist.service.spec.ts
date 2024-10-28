import { TestBed } from '@angular/core/testing';

import { LikedlistService } from './likedlist.service';

describe('LikedlistService', () => {
  let service: LikedlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

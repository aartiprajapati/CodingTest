import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotoserviceService } from './photoservice.service';

describe('PhotoserviceService', () => {
  let service: PhotoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PhotoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

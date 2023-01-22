import { TestBed } from '@angular/core/testing';
import { PorfolioService} from 'src/app/servicios/porfolio.service'

describe('PortfolioService', () => {
  let service: PorfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

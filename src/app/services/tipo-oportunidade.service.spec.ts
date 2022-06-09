import { TestBed } from '@angular/core/testing';

import { TipoOportunidadeService } from './tipo-oportunidade.service';

describe('TipoOportunidadeService', () => {
  let service: TipoOportunidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoOportunidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

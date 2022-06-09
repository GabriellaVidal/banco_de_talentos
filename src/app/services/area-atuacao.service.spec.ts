import { TestBed } from '@angular/core/testing';

import { AreaAtuacaoService } from './area-atuacao.service';

describe('AreaAtuacaoService', () => {
  let service: AreaAtuacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaAtuacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

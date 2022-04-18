import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({  
  styleUrls: ['./cadastrar-graduacao.component.scss'],
  templateUrl: './cadastrar-graduacao.component.html',
})
export class CadastrarGraduacaoComponent {

  instituicoes = ['UFRN - Universidade federal do Rio Grande do Norte', 'UFRJ - Universidade federal do Rio de janeiro'];

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}

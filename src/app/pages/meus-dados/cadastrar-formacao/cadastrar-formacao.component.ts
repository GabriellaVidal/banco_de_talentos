import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  styleUrls: ['./cadastrar-formacao.component.scss'],
  templateUrl: './cadastrar-formacao.component.html',
})
export class CadastrarFormacaoComponent {

  instituicoes = [
    'UFRN - Universidade federal do Rio Grande do Norte',
    'UFRJ - Universidade federal do Rio de janeiro',
  ];
  niveis = ['Graduação', 'Mestrado'];

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}

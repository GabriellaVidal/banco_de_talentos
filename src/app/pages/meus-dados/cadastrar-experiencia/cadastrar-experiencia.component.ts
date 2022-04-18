import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({  
  styleUrls: ['./cadastrar-experiencia.component.scss'],
  templateUrl: './cadastrar-experiencia.component.html',
})
export class CadastrarExperienciaComponent {

  instituicoes = ['UFRN - Universidade federal do Rio Grande do Norte', 'UFRJ - Universidade federal do Rio de janeiro'];

  areas = ['DIREITO', 'GESTÃO ESTRATÉGICA', 'INFORMÁTICA', 'LÍNGUAS', 'MATERIAL E PATRIMÔNIO', 'ORÇAMENTO E FINANÇAS', 'PESQUISA', 
  'QUALIDADE NO SERVIÇO PÚBLICO', 'COMUNICAÇÃO', 'AUDITORIA E CONTROLE', 'DOCUMENTAÇÃO', 'GESTÃO DE PESSOAS', 'LICITAÇÃO E CONTRATOS', 'EDUCAÇÃO', 
  'ENGENHARIA', 'ARQUITETURA', 'CIÊNCIAS HUMANAS', 'SEGURANÇA E TRANSPORTE'];

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}

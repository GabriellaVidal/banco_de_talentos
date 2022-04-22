import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({  
  styleUrls: ['./inscricao.component.scss'],
  templateUrl: './inscricao.component.html',
})
export class InscricaoComponent {

  instituicoes = ['UFRN - Universidade federal do Rio Grande do Norte', 'UFRJ - Universidade federal do Rio de janeiro'];

  areas = ['DIREITO', 'GESTÃO ESTRATÉGICA', 'INFORMÁTICA', 'LÍNGUAS', 'MATERIAL E PATRIMÔNIO', 'ORÇAMENTO E FINANÇAS', 'PESQUISA', 
  'QUALIDADE NO SERVIÇO PÚBLICO', 'COMUNICAÇÃO', 'AUDITORIA E CONTROLE', 'DOCUMENTAÇÃO', 'GESTÃO DE PESSOAS', 'LICITAÇÃO E CONTRATOS', 'EDUCAÇÃO', 
  'ENGENHARIA', 'ARQUITETURA', 'CIÊNCIAS HUMANAS', 'SEGURANÇA E TRANSPORTE'];

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}

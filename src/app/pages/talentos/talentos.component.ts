import {Component} from '@angular/core';

import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./talentos.component.scss'],
  templateUrl: './talentos.component.html',
})

export class TalentosComponent{

  areas = ['DIREITO', 'GESTÃO ESTRATÉGICA', 'INFORMÁTICA', 'LÍNGUAS', 'MATERIAL E PATRIMÔNIO', 'ORÇAMENTO E FINANÇAS', 'PESQUISA', 
  'QUALIDADE NO SERVIÇO PÚBLICO', 'COMUNICAÇÃO', 'AUDITORIA E CONTROLE', 'DOCUMENTAÇÃO', 'GESTÃO DE PESSOAS', 'LICITAÇÃO E CONTRATOS', 'EDUCAÇÃO', 
  'ENGENHARIA', 'ARQUITETURA', 'CIÊNCIAS HUMANAS', 'SEGURANÇA E TRANSPORTE'];

  graduacoes = ['DIREITO', 'GESTÃO ESTRATÉGICA', 'INFORMÁTICA', 'LÍNGUAS', 'MATERIAL E PATRIMÔNIO', 'ORÇAMENTO E FINANÇAS', 'PESQUISA', 
  'QUALIDADE NO SERVIÇO PÚBLICO', 'COMUNICAÇÃO', 'AUDITORIA E CONTROLE', 'DOCUMENTAÇÃO', 'GESTÃO DE PESSOAS', 'LICITAÇÃO E CONTRATOS', 'EDUCAÇÃO', 
  'ENGENHARIA', 'ARQUITETURA', 'CIÊNCIAS HUMANAS', 'SEGURANÇA E TRANSPORTE'];

  talentos = [
    {
      img: 'assets/images/eva.png', 
      nome: 'Maria da Graça da Silva', 
      area_atuacao: 'DIREITO',
      graduacao: 'GESTÃO ESTRATÉGICA',
      pos_graduacao: 'ARQUITETURA',
    },
  ];

  hide = false;

  openHideResultados(hideView) {
    if(hideView == false){
      this.hide = true
    } else{
      this.hide = false
    }
  }
}

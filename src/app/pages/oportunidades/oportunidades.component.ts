import { Component } from '@angular/core';

import { NbWindowService } from '@nebular/theme';

import { InscricaoComponent } from './inscricao/inscricao.component';


@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./oportunidades.component.scss'],
  templateUrl: './oportunidades.component.html',
})
export class OportunidadesComponent {

  areas = ['DIREITO', 'GESTÃO ESTRATÉGICA', 'INFORMÁTICA', 'LÍNGUAS', 'MATERIAL E PATRIMÔNIO', 'ORÇAMENTO E FINANÇAS', 'PESQUISA', 
  'QUALIDADE NO SERVIÇO PÚBLICO', 'COMUNICAÇÃO', 'AUDITORIA E CONTROLE', 'DOCUMENTAÇÃO', 'GESTÃO DE PESSOAS', 'LICITAÇÃO E CONTRATOS', 'EDUCAÇÃO', 
  'ENGENHARIA', 'ARQUITETURA', 'CIÊNCIAS HUMANAS', 'SEGURANÇA E TRANSPORTE'];

  graduacoes = ['DIREITO', 'GESTÃO ESTRATÉGICA', 'INFORMÁTICA', 'LÍNGUAS', 'MATERIAL E PATRIMÔNIO', 'ORÇAMENTO E FINANÇAS', 'PESQUISA', 
  'QUALIDADE NO SERVIÇO PÚBLICO', 'COMUNICAÇÃO', 'AUDITORIA E CONTROLE', 'DOCUMENTAÇÃO', 'GESTÃO DE PESSOAS', 'LICITAÇÃO E CONTRATOS', 'EDUCAÇÃO', 
  'ENGENHARIA', 'ARQUITETURA', 'CIÊNCIAS HUMANAS', 'SEGURANÇA E TRANSPORTE'];

  tipos = ['COMITÊ', 'COMISSÃO', 'EVENTO', 'TREINAMENTO'];

  oportunidades = [
    {
      titulo: 'Meio Ambiente e sustentabilidade', 
      descricao: 'Palestra sobre concientização ambiental.',
    },
    {
      titulo: 'Diretor do setor de Inovação Judiciário',
      descricao: 'Vaga para preenchimento de cargo',
    },
    {
      titulo: 'Podcast Justa Prosa',
      descricao: 'Falando sobre avanços e desafios pela igualdade de gênero.',
    },
    {
      titulo: 'Meio Ambiente e sustentabilidade', 
      descricao: 'Palestra sobre concientização ambiental.',
    },
    {
      titulo: 'Diretor do setor de Inovação Judiciário',
      descricao: 'Vaga para preenchimento de cargo',
    },
  ];

  constructor(private windowService: NbWindowService) {}

  openInscricao() {
    this.windowService.open(InscricaoComponent, { title: `Inscrição` });
  }

  hide = false;

  openHideResultados(hideView) {
    if(hideView == false){
      this.hide = true
    } else{
      this.hide = false
    }
  }

}

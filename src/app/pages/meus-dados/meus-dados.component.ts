import { Component } from '@angular/core';

import { NbWindowService } from '@nebular/theme';
import { CadastrarGraduacaoComponent } from './cadastrar-graduacao/cadastrar-graduacao.component';
import { CadastrarExperienciaComponent } from './cadastrar-experiencia/cadastrar-experiencia.component';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./meus-dados.component.scss'],
  templateUrl: './meus-dados.component.html',
})
export class MeusDadosComponent {

  areas = ['DIREITO', 'GESTÃO ESTRATÉGICA', 'INFORMÁTICA', 'LÍNGUAS', 'MATERIAL E PATRIMÔNIO', 'ORÇAMENTO E FINANÇAS', 'PESQUISA', 
  'QUALIDADE NO SERVIÇO PÚBLICO', 'COMUNICAÇÃO', 'AUDITORIA E CONTROLE', 'DOCUMENTAÇÃO', 'GESTÃO DE PESSOAS', 'LICITAÇÃO E CONTRATOS', 'EDUCAÇÃO', 
  'ENGENHARIA', 'ARQUITETURA', 'CIÊNCIAS HUMANAS', 'SEGURANÇA E TRANSPORTE'];

  constructor(private windowService: NbWindowService) {}

  openCadastrarGraduacao() {
    this.windowService.open(CadastrarGraduacaoComponent, { title: `Cadastrar Graduação` });
  }

  openPosCadastrarGraduacao() {
    this.windowService.open(CadastrarGraduacaoComponent, { title: `Cadastrar Pós-Graduação` });
  }

  openCadastrarExperiencia() {
    this.windowService.open(CadastrarExperienciaComponent, { title: `Cadastrar Experiência` });
  }
}

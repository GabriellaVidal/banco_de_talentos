import { Component } from '@angular/core';

import { NbWindowService } from '@nebular/theme';
import { CadastrarFormacaoComponent } from './cadastrar-formacao/cadastrar-formacao.component';
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

  openCadastrarFormacao() {
    this.windowService.open(CadastrarFormacaoComponent, { title: `Cadastrar Formação` });
  }

  openCadastrarExperiencia() {
    this.windowService.open(CadastrarExperienciaComponent, { title: `Cadastrar Experiência` });
  }
}

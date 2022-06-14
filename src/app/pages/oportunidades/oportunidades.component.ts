import { Component } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { InscricaoComponent } from './inscricao/inscricao.component';

import { TipoOportunidadeService } from '../../services/tipo-oportunidade.service';
import { TipoOportunidade } from '../../models/tipo-oportunidade';
import { FormacaoService } from '../../services/formacao.service';
import { Formacao } from '../../models/formacao';
import { AreaAtuacaoService } from '../../services/area-atuacao.service';
import { AreaAtuacao } from '../../models/area-atuacao';
import { OportunidadeService } from '../../services/oportunidade.service';
import { Oportunidade } from '../../models/oportunidade';
import { Curso } from "../../models/curso";
import { CursoService } from "../../services/curso.service";

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./oportunidades.component.scss'],
  templateUrl: './oportunidades.component.html',
})
export class OportunidadesComponent {

  constructor(
    private windowService: NbWindowService,
    private tipoOportunidadeService: TipoOportunidadeService,
    private formacaoService: FormacaoService,
    private areaAtuacaoService: AreaAtuacaoService,
    private cursoService: CursoService,
    private oportunidadeService: OportunidadeService
    ) {}

  tipoOportunidade = {} as TipoOportunidade;
  tipoOportunidades: TipoOportunidade[];

  formacao = {} as Formacao;
  formacoes: Formacao[];

  areaAtuacao = {} as AreaAtuacao;
  areaAtuacoes: AreaAtuacao[];

  curso = {} as Curso;
  cursos: Curso[];

  oportunidade = {} as Oportunidade;
  oportunidades: Oportunidade[];


  areas = ['DIREITO', 'GESTÃO ESTRATÉGICA', 'INFORMÁTICA', 'LÍNGUAS', 'MATERIAL E PATRIMÔNIO', 'ORÇAMENTO E FINANÇAS', 'PESQUISA',
  'QUALIDADE NO SERVIÇO PÚBLICO', 'COMUNICAÇÃO', 'AUDITORIA E CONTROLE', 'DOCUMENTAÇÃO', 'GESTÃO DE PESSOAS', 'LICITAÇÃO E CONTRATOS', 'EDUCAÇÃO',
  'ENGENHARIA', 'ARQUITETURA', 'CIÊNCIAS HUMANAS', 'SEGURANÇA E TRANSPORTE'];


  // oportunidades = [
  //   {
  //     titulo: 'Meio Ambiente e sustentabilidade',
  //     descricao: 'Palestra sobre concientização ambiental.',
  //   },
  //   {
  //     titulo: 'Diretor do setor de Inovação Judiciário',
  //     descricao: 'Vaga para preenchimento de cargo',
  //   },
  //   {
  //     titulo: 'Podcast Justa Prosa',
  //     descricao: 'Falando sobre avanços e desafios pela igualdade de gênero.',
  //   },
  //   {
  //     titulo: 'Meio Ambiente e sustentabilidade',
  //     descricao: 'Palestra sobre concientização ambiental.',
  //   },
  //   {
  //     titulo: 'Diretor do setor de Inovação Judiciário',
  //     descricao: 'Vaga para preenchimento de cargo',
  //   },
  // ];

  getTipoOportunidades() {
    this.tipoOportunidadeService.getTipoOportunidades().subscribe((tipoOportunidades: TipoOportunidade[]) => {
      this.tipoOportunidades = tipoOportunidades;
    });
  }

  getCursos() {
    this.cursoService.getCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
  }

  getFormacoes() {
    this.formacaoService.getFormacoes().subscribe((formacoes: Formacao[]) => {
      this.formacoes = formacoes;
    });
  }

  getAreaAtuacoes() {
    this.areaAtuacaoService.getAreaAtuacoes().subscribe((areaAtuacoes: AreaAtuacao[]) => {
      this.areaAtuacoes = areaAtuacoes;
    });
  }

  getOportunidades() {
    this.oportunidadeService.getOportunidades().subscribe((oportunidades: Oportunidade[]) => {
      this.oportunidades = oportunidades;
    });
  }

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

  ngOnInit() {
    this.getTipoOportunidades();
    this.getCursos();
    this.getAreaAtuacoes();
    this.getOportunidades();
  }

}

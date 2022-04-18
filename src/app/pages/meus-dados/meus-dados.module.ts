import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MeusDadosComponent } from './meus-dados.component';
import { CadastrarGraduacaoComponent } from './cadastrar-graduacao/cadastrar-graduacao.component';
import { CadastrarExperienciaComponent } from './cadastrar-experiencia/cadastrar-experiencia.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbTabsetModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    MeusDadosComponent,
    CadastrarGraduacaoComponent,
    CadastrarExperienciaComponent,
  ],
})
export class MeusDadosModule {}

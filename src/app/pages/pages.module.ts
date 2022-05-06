import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MeusDadosModule } from './meus-dados/meus-dados.module';
import { OportunidadesModule } from './oportunidades/oportunidades.module';
import { TalentosModule } from './talentos/talentos.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MeusDadosModule,
    OportunidadesModule,
    TalentosModule,
    ConfiguracoesModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}

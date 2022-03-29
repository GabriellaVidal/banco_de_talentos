import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { TalentosComponent } from './talentos/talentos.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'meus-dados',
      component: MeusDadosComponent,
    },
    {
      path: 'oportunidades',
      component: OportunidadesComponent,
    },
    {
      path: 'talentos',
      component: TalentosComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

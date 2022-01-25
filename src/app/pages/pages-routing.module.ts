import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {path: 'home', component: DashboardComponent, data: { animation: 'HomePage' }},

  {path: 'intelipost', loadChildren: () => import('./intelipost/intelipost.module').then(m => m.IntelipostModule), data: { animation: 'IntelipostPage' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubagesComponent } from './cubages/cubages.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cubages' },

  {path: 'cubages', component: CubagesComponent, data: { animation: 'CubagesPage' }},

  {path: 'quotes', component: QuotesComponent, data: { animation: 'QuotesPage' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntelipostRoutingModule { }

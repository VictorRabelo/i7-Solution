import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pages' },
  
  {path: 'pages', loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule), data: { animation: 'PagesPage' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

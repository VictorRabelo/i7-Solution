import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelipostRoutingModule } from './intelipost-routing.module';
import { CubagesComponent } from './cubages/cubages.component';
import { QuotesComponent } from './quotes/quotes.component';


@NgModule({
  declarations: [
    CubagesComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule,
    IntelipostRoutingModule
  ]
})
export class IntelipostModule { }

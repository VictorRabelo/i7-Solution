import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from './main/main.module';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MainModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports:[
    LoginComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
  ],
  entryComponents: [
    LoginComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
  ]
})
export class ModulesModule { }

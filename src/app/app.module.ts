import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Locale PT-BR
import localePtBR from '@angular/common/locales/pt';
registerLocaleData(localePtBR);

// Ngx
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxIziToastModule } from 'ngx-izitoast';

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from './app.component';

import { ModulesModule } from '@modules/modules.module';
import { ComponentsModule } from '@components/components.module';

import { ToastrModule } from 'ngx-toastr';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,

        ModulesModule,
        ComponentsModule,

        NgbModule,
        NgbDropdownModule,
        NgxIziToastModule,
        
        Ng2SearchPipeModule,
        NgxMaskModule.forRoot(),
        NgxSpinnerModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

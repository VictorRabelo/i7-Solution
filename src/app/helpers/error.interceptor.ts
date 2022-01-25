import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MessageService } from '@services/message.service';
import { AppService } from '@services/app.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    public appService: AppService,
    public message: MessageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => {
      if (error.status == 0) {
        this.message.alertNet();
      }

      if(error.status == 401){
        this.message.toastError('Usuário inválido!');
        this.appService.logout();
      }
      
      if(error.status == 500){
        
        if(error.error.detailMessage){
          this.message.toastError(error.error.detailMessage);
        }

        if(error.error.telefone){
          this.message.toastError(error.error.telefone[0]);
        }
        
        if(error.error.email){
          this.message.toastError(error.error.email[0]);
        }
        
        if(error.error.login){
          this.message.toastError(error.error.login[0]);
        }
        
        if(error.error.password){
          this.message.toastError(error.error.password[0]);
        }
      }

      const err = error.message || error.error.message || error.error.code;
      
      return throwError(err);
    }));
  }
}

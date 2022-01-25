import { Component } from '@angular/core';
import { ControllerBase } from './../../controller/controller.base';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends ControllerBase {
    public frasesDoDia: any = [
        'Ótimo Trabalho!',
        'Ótima Semana!',
        'Semana Abençoada!',
        'Vai da tudo certo!',
        'O Segredo do SUCESSO só depende de você!',
      ];
    
    public random: any;
    public today: number = Date.now();

    constructor() { 
        super();
    }
    
    ngOnInit() {
        this.random = this.getRandonText();
    }
    
    getRandonText(){
        let dados = Math.floor(Math.random() * 5);
      
        return this.frasesDoDia[dados];
    }
}

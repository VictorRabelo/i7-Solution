import { animate, style, transition, trigger } from '@angular/animations';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ModalSelectClientComponent } from '@components/modal-select-client/modal-select-client.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '@services/app.service';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger(
          'enterAnimation', [
            transition(':enter', [
              style({opacity: 0}),
              animate('600ms', style({opacity: 1}))
            ])
          ]
        )
    ],
})
export class HeaderComponent implements OnInit {
    @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
    public searchForm: FormGroup;
    public companies: any = {};

    constructor(
        private appService: AppService, 
        private modalCtrl: NgbModal
    ) {}

    ngOnInit() {
        this.companies = JSON.parse(localStorage.getItem(environment.companies));

        this.searchForm = new FormGroup({
            search: new FormControl(null)
        });
    }

    changeCompany(){
        const modalRef = this.modalCtrl.open(ModalSelectClientComponent, { size: 'sm', backdrop: 'static' });
        modalRef.componentInstance.data = this.companies;
        modalRef.componentInstance.crud = 'Alterar';
        modalRef.result.then(res => {
          if(res.success){
            document.location.reload()
          }
        })
    }

    logout() {
        this.appService.logout();
    }
}

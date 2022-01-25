import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    public user;
    public menu = MENU;

    constructor(public appService: AppService) {}

    ngOnInit() {
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'Dashboard',
        path: ['/restricted/pages/home'],
    },
    {
        name: 'Intelipost',
        icon: 'fas fa-truck-moving',
        children: [
            {
                name: 'Cubagens',
                path: ['/restricted/pages/intelipost/cubages']
            },

            {
                name: 'Cotações',
                path: ['/restricted/pages/intelipost/quotes']
            }
        ]
    }
];

import { Component } from '@angular/core';
import { ControllerBase } from './controller/controller.base';
import { AppService } from '@services/app.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends ControllerBase {
    constructor() { super(); }
}

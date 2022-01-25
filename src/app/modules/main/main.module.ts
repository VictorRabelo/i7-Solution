import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { UserComponent } from './header/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainRoutingModule } from './main-routing.module';
import { ComponentsModule } from '@components/components.module';



@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuSidebarComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports:[
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuSidebarComponent,
    UserComponent
  ],
  entryComponents: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuSidebarComponent,
    UserComponent,
  ]
})
export class MainModule { }

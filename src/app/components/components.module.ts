import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { ModalSelectClientComponent } from './modal-select-client/modal-select-client.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownMenuComponent } from './dropdown/dropdown-menu/dropdown-menu.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ModalSelectClientComponent,
    MenuItemComponent,
    DropdownComponent,
    DropdownMenuComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports:[
    RouterModule,
    ModalSelectClientComponent,
    MenuItemComponent,
    DropdownComponent,
    DropdownMenuComponent,
    ButtonComponent
  ],
  entryComponents: [
    ModalSelectClientComponent,
    MenuItemComponent,
    DropdownComponent,
    DropdownMenuComponent,
    ButtonComponent
  ],
})
export class ComponentsModule { }

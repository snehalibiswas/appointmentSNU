import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    DropDownListModule
  ]
})
export class NavigationModule { 
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { ApiButtonComponent } from './api-button/api-button.component';
import { AdminButtonComponent } from './admin-button/admin-button.component';
import { RefreshButtonComponent } from '../shared-components/refresh-button/refresh-button.component';


@NgModule({
  declarations: [
    HelpComponent,
    SubNavigationComponent,
    ApiButtonComponent,
    AdminButtonComponent,
    RefreshButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SubNavigationComponent
  ]
})
export class SubnavModule { }

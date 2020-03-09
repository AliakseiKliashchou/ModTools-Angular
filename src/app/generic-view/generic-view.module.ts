import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { GenericViewComponent } from './generic-view.component';
import { GenericViewRoutingModule } from './generic-view-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ViewResultComponent } from '../main/view-result/view-result.component';
import { SideBarComponent } from './../main/view-result/side-bar/side-bar.component';


@NgModule({
  declarations: [GenericViewComponent, ViewResultComponent, SideBarComponent],
  imports: [
  CommonModule,
    GenericViewRoutingModule,
    SharedComponentsModule,
    BreadcrumbModule,
  ]
})
export class GenericViewModule { }

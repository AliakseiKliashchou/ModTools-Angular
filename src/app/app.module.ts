import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SubnavModule } from './subnav/subnav.module';

import { SentryErrorHandler } from 'src/app/shared-components/sentry.service';
import { ApiService } from './shared-components/services/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    SubnavModule,
    BreadcrumbModule,
    HttpClientModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: SentryErrorHandler },
    ApiService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PaginationModule} from 'ngx-bootstrap';
import {DatepickerModule} from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap';
import {ProgressbarModule} from 'ngx-bootstrap';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {TimepickerModule} from 'ngx-bootstrap';
import {AppComponent}   from './app.component';
import {routing} from './app.routes';
import {NotificationService} from '../services/notification.service';
import {MainComponent} from './main/main.component';
import {MainService} from "../services/main.service";
import {AppConfig} from "./app.config";
import {MyDateRangePickerModule} from 'mydaterangepicker';

@NgModule({
  imports: [
    BrowserModule,
    SlimLoadingBarModule.forRoot(),
    BrowserAnimationsModule,
    DatepickerModule.forRoot(),
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    routing,
    TimepickerModule.forRoot(),
    MyDateRangePickerModule
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  providers: [
    AppConfig,
    NotificationService,
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

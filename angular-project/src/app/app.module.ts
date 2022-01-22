import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { LazyLoadComponent } from './components/lazy-load/lazy-load.component';
import { BulkDataComponent } from './components/bulk-data/bulk-data.component';
import { RequestComponent } from './components/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LazyLoadComponent,
    BulkDataComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

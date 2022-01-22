import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkDataComponent } from './components/bulk-data/bulk-data.component';
import { HelloComponent } from './components/hello/hello.component';
import { LazyLoadComponent } from './components/lazy-load/lazy-load.component';
import { RequestComponent } from './components/request/request.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'lazy-load', component: LazyLoadComponent },
  { path: 'bulk-data', component: BulkDataComponent },
  { path: 'request', component: RequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule { }
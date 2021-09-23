import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from './servers/servers.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //import ServerComponent manually
import {FormsModule} from '@angular/forms'; //import FormsModule for Two-Way Binding

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent //let Angular knows there is one new component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

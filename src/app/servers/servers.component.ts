import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-servers', //Element selector
  // selector: '[app-servers]', //Attribute selector
  selector: '.app-servers', //Style selector
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `, //inline template
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewSever = false;
  serverCreationStatus = "No server was created!!!"
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    //enable button after 2s
    setTimeout(() => {
      this.allowNewSever = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created!!! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

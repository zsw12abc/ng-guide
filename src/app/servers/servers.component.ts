import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-servers', //Element selector
  // selector: '[app-servers]', //Attribute selector
  selector: '.app-servers', //Style selector
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `, //inline template
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

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

  constructor() {
    setTimeout(() => {
      this.allowNewSever = true;
    }, 2000)
  }

  ngOnInit(): void {
  }
}

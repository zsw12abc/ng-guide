//need to import Component to create Component decorator
import {Component} from '@angular/core'

@Component({
  selector: 'app-server',  //must be unique
  templateUrl: './server.component.html'
})


//export the component to let others to use it
export class ServerComponent {
  serverId: number = 10;
  serverStatue: string = 'offline';

  constructor() {
    this.serverStatue = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatue;
  }

  getColor() {
    return this.serverStatue === 'online' ? 'green' : 'red';
  }
}

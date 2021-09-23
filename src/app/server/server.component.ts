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

  getServerStatus() {
    return this.serverStatue;
  }
}

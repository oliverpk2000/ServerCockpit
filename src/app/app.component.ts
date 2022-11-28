import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServerCockpit';
  serverArray: ServerObject[] = [];
  serverName: String = "";
  serverType: String = "";

  createServer() {
    let so = new ServerObject()
    so.name = this.serverName;
    so.type = this.serverType;
    this.serverArray.push(so);
    this.serverName = "";
    this.serverType = "";
  }


}

class ServerObject {
  type: String = "";
  name: String = "";
}

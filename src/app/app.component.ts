import {Component} from '@angular/core';
import {ServerObject} from "./ServerObject";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverArray: ServerObject[] = [];


  appendServerObject(so: ServerObject) {
    this.serverArray.push(so);
  }
}



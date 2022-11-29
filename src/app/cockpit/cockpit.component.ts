import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerObject} from "../ServerObject";


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  title = 'ServerCockpit';
  serverName: String = "";
  serverType: String = "";

  @Output() objectCreator: EventEmitter<ServerObject> = new EventEmitter<ServerObject>()

  createServer() {
    let so = new ServerObject()
    so.name = this.serverName;
    so.type = this.serverType;
    this.serverName = "";
    this.serverType = "";
    this.objectCreator.emit(so);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServerButton = false;
  serverCreatinonStatus = 'No server was created!!!';
  serverName = '';

  constructor() { 
    setTimeout( () => {
      this.allowAddServerButton = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreatinonStatus = 'Server ' + this.serverName + ' was created';
  }

  onServerNameInput(event: Event) {
    return this.serverName = (<HTMLInputElement>event.target).value;
  }

}

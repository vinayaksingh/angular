import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isAddServerBtnDisabled = false;
  serverName = '';
  severCreationStatus = "No server created yet!! ";

  constructor() { 
    setTimeout(()=> {
      this.isAddServerBtnDisabled = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer () {
    this.severCreationStatus = "Server was created with name : " + this.serverName; 
  }

  onUpdateServername(event: Event){
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}

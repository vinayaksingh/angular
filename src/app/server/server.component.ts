import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // selector as element
    // selector: '[app-server]', // selector as attribute
    // selector: '.app-server', // selector as class
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {

    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }

}


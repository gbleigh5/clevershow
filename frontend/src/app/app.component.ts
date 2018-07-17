import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  open = false;
  devices = [
    {
      "slug": "packrobot",
      "name": "PackRobot",
    },
    {
      "slug": "cleverbox",
      "name": "CleverBox",
    },
    {
      "slug": "cleverflex",
      "name": "CleverFlex",
    }
  ];

  constructor(private router:Router){  }

  showDrop(open:boolean){
    this.open = !open;
  }

}

import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  devices:any;

  constructor(private conf:ConfigService) { }

  ngOnInit() {
    this.showDevices();
  }

  showDevices(){
    this.conf.getDevices().subscribe((data) => {
      this.devices = data;
      console.log(data);
      return this.devices;
    });
  }

}

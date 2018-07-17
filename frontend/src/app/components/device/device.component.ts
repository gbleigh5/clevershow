import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  slug:string;
  versions:any;
  device_name:string;

  constructor(private activRoute:ActivatedRoute, private conf:ConfigService) { }

  ngOnInit() {

    this.activRoute.params.subscribe(params => {
      this.slug = params['slug'];
    });

    this.conf.getVersions(this.slug).subscribe(data => {
      this.versions = data[0]['versions'];
      this.device_name = data[0]['device_name'];
      console.log(data);
    });
  }

}

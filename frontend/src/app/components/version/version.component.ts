import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  slug:string;
  device_name:string;
  version:number;

  constructor(private activRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activRoute.params.subscribe(params => {
      this.slug = params['slug'];
      this.device_name = params['device_name'];
      this.version = params['version'];
    });

    
  }

}

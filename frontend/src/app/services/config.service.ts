import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

let point = "assets/JSON/";
let devices = `${point}devices.json`;
let versions = `${point}versions.json`;
let screenshots = `${point}screenshots.json`;


@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private http:Http) { }

  getDevices(){
    return this.http.get(devices).pipe(map(res => res.json()));
  }

  getVersions(slug){
    return this.http.get(versions).pipe(map(res => {
      
      return res.json().filter((item) => {
        if(item['device_slug'] == slug) return item
      });

    }));
  }

  getScreens(slug, version){
    return this.http.get(screenshots).pipe(map(res => {
      
      return res.json();

    }));
  }

}

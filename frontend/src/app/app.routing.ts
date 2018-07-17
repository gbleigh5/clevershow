import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DeviceComponent } from './components/device/device.component';
import { VersionComponent } from './components/version/version.component';

const appRoutes:Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":slug",
    component: DeviceComponent
  },
  {
    path: ":slug/v/:version",
    component: VersionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
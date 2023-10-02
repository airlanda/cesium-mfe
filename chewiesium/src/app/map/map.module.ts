import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map.component';
import { CesiumDirective } from './cesium.directive';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [MapComponent,CesiumDirective],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)]
})
export class MapModule {}

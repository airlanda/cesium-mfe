import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map.component';
import { CesiumDirective } from './cesium.directive';


const routes: Routes = [
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  declarations: [MapComponent,CesiumDirective],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }

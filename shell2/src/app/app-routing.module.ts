import { loadRemoteModule } from "@angular-architects/module-federation";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'microfrontend',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './Component'
    })
    .then(m => m.AbcModule)
  },
  {
    path: 'map',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4777/remoteEntry.js',
      type: 'module',
      exposedModule: './Module'
    })
    .then(m => m.MapModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
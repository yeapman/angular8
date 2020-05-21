import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

// preload Strategy upload first page, than when first page full uploaded, upload next route pages
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {HomePageComponent} from "./home-page/home-page.component";


const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  // {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'} OLD Syntax, Lazy Loading another chunk when click /about page
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

// preload Strategy upload first page, than when first page full uploaded, upload next route pages 
export class AppRoutingModule { }

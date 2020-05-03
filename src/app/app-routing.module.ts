import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomePageComponent, pathMatch: 'full'},
    // {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'} OLD Syntax, Lazy Loading another chunk when click /about page
    {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

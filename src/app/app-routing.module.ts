import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomePageComponent, pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

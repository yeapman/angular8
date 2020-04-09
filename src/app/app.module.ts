import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import {StyleDirective} from "./directives/style.directive";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

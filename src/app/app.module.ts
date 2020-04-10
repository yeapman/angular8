import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import {StyleDirective} from "./directives/style.directive";
import {MultByPipe} from "./pipes/mult-by.pipe";
import { ExMatrkPipe } from './pipes/ex-matrk.pipe';
import { SearchFilterCustomPipe } from './pipes/search-filter-custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    StyleDirective,
    MultByPipe,
    ExMatrkPipe,
    SearchFilterCustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {Observable} from "rxjs";


export interface Post {
  title: string
  text: string
  id?: any
}

export interface newPost {
  title: string
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
  }



}

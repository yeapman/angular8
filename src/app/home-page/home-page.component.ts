import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('NEW')

    this.meta.addTags([
      {name: 'keywords', content: 'angular, google, appcomponent'}

    ])
  }

  ngOnInit() {
  }

}

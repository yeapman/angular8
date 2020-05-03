import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";



export interface HttpClientTest {
  completed: boolean
  title: string
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  testData: HttpClientTest[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.getData()
  }

  getData() {
    this.http.get<HttpClientTest[]>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(data => {
        this.testData = data
      })
  }



}

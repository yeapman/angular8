import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';


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
  // @ContentChild('info', {static: false}) infoRef: ElementRef;
  // posts: Post[] = [
  //   {
  //     title: 'Want learn Angular Components',
  //     text: 'I am still learning components',
  //     id: 1
  //   },
  //   {
  //     title: 'LALA1111111111111111111111111111111222222222222222222',
  //     text: 'NANA2222222222222222222222222222222222222',
  //     id: 2
  //   }
  // ];

  ngOnInit(): void {
    // setTimeout( () => {
    //   console.log('HELLO')
    //   this.posts[0] = {
    //     title: 'CHAAAAAAAAAAAAAANGED',
    //     text: 'LOOOOOOOOOOOOOOOX'
    //   }
    // }, 5000)
  }


  // receiveData(myData: Post) {
  //   this.posts.unshift(myData)
  //   console.log();
  //
  // }
  //
  // rem(id: number) {
  //   console.log(id);
  //
  //   this.posts = this.posts.filter(p => p.id !== id)
  // }

  // ****pipes****

  num: number = Math.E
  str: string = 'Hello, Yarik';
  search: string = '';
  searchFilter = 'title';

  newPost: newPost[] = [
    {title: 'Beer', name: 'Yarik Pro Proger'},
    {title: 'Coronavirus', name: '2020Hello'},
    {title: 'Third', name: 'CUSTOOOOOOOOOOOOOOm'}
  ]

  addNewPost() {
    this.newPost.push({
      title: 'Angular8', name: 'pureChangeDetector'
    });
  }

}

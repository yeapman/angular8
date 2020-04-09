import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title: any = '';
  article: any = '';

  @Output() outAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if(this.title.trim() && this.article.trim()) {
      const post: Post = {
        title: this.title,
        text: this.article
      };

      this.outAdd.emit(post);

      this.title = this.article = '';
    }

  }

  focus() {
    this.inputRef.nativeElement.focus();
  }

}

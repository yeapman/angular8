import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputPost: Post;
  @Output() onRemove = new EventEmitter<number>();
  constructor() {
    console.log('1');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('2');
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterContentInit(): void {
      console.log('AfterContent');

  }

  ngAfterContentChecked(): void {
      console.log('after content checked')
  }

  ngAfterViewInit(): void {
    console.log('after view init')
  }

  ngAfterViewChecked(): void {
    console.log('after view checked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  remowe() {
    this.onRemove.emit(this.inputPost.id);
  }

}

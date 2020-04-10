import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";


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
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }


  submit() {
    console.log('form', this.form);
    const formData = {...this.form.value};
    console.log(formData);
  }

}

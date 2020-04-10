import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";


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
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmails]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', [Validators.required])
      }),
      skills: new FormArray([

      ])
    });
  }


  submit() {
    console.log('form', this.form);
    const formData = {...this.form.value};
    console.log(formData);
  }

  addSkill() {
    const addControl = new FormControl('', [Validators.required]);
    // (<FormArray>this.form.get('skills')).push();
    (this.form.get('skills') as FormArray).push(addControl);
  }
}

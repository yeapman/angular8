import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class MyValidators {

  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if(['yarik@gmail.com'].includes(control.value)) {
      return {
        restrictedEmail: true
      }
    }
    return null
  }


  static unitEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout( () => {
        if(control.value === 'yarik2@gmail.com') {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      }, 1000 )
    })
  }

}

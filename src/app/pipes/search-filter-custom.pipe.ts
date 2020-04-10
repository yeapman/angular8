import { Pipe, PipeTransform } from '@angular/core';
import {newPost} from "../app.component";

@Pipe({
  name: 'searchFilterCustom',
  pure: false
})
export class SearchFilterCustomPipe implements PipeTransform {

  transform(posts: newPost[], search: string = '', searchFilter: string = 'title'): newPost[] {
    if (!search.trim()) {
      return posts
    }

    return posts.filter(post => {
      return post[searchFilter].toLowerCase().includes(search.toLowerCase());
    });

  }

}

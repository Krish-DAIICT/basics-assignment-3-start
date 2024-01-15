import { Component } from '@angular/core';
import { iPost } from './post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: iPost[] = [];
  showCont: boolean = true;
  push_str: string = "";

  addThing() {
    this.posts.push({
      count: this.posts.length + 1,
      content: this.push_str,
    });

    console.log(this.posts);
  }

  returnStyle(post: iPost){
    if(post.count >= 5) return {
      "color": "white",
      "backgroundColor": "blue",
      "border-style": "solid",
      "padding": "2%"
    };
    return {
      "padding": "2%",
      "border-style": "solid"
    };
  }
}

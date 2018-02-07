import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    col: string = '#eaeaff';
    viewedCol: string = '#f5e0f5';

    posts: Post[] = [
        {
            id: 0,
            submittedBy: 0,
            title: "Can you believe I made the very first post ever??",
            timeCreated: new Date(Date.now()).toUTCString(), //actual time
            content: "This is a test post. Upvote, don't, up to you.",
            topic: 0,
            votes: 942,
            contentOn: false,
            buttonText: "Show content", //don't need to embed in post class
            read: false,
            backgroundColor: this.col
        },
        {
            id: 2,
            submittedBy: 0,
            title: "Test posts are such a joke.",
            timeCreated: new Date(Date.now()).toUTCString(), //actual time
            content: "Weeeeee! Just kidding I absolutely, seriously, totally love test posts!" +'\n' + "One time I made a test post and it was so awesome!",
            topic: 0,
            votes: 92,
            contentOn: false,
            buttonText: "Show content", //don't need to embed in post class
            read: false,
            backgroundColor: this.col
        },
        {
            id: 2,
            submittedBy: 0,
            title: "Test posts are such a joke.",
            timeCreated: new Date(Date.now()).toUTCString(), //actual time
            content: "Weeeeee! Just kidding I absolutely, seriously, totally love test posts!" + '\n' + "One time I made a test post and it was so awesome!",
            topic: 0,
            votes: 92,
            contentOn: false,
            buttonText: "Show content", //don't need to embed in post class
            read: false,
            backgroundColor: this.col
        },
        {
            id: 2,
            submittedBy: 1,
            title: "Test posts are such a joke.",
            timeCreated: new Date(Date.now()).toUTCString(), //actual time
            content: "Weeeeee! Just kidding I absolutely, seriously, totally love test posts!" + '\n' + "One time I made a test post and it was so awesome!",
            topic: 0,
            votes: 92,
            contentOn: false,
            buttonText: "Show content", //don't need to embed in post class
            read: false,
            backgroundColor: this.col
        },
        {
            id: 2,
            submittedBy: 0,
            title: "Test posts are such a joke.",
            timeCreated: new Date(Date.now()).toUTCString(), //actual time
            content: "Weeeeee! Just kidding I absolutely, seriously, totally love test posts!" + '\n' + "One time I made a test post and it was so awesome!",
            topic: 0,
            votes: 92,
            contentOn: false,
            buttonText: "Show content", //don't need to embed in post class
            read: false,
            backgroundColor: this.col
        },
        {
            id: 1,
            submittedBy: 1,
            title: "When are we gonna be able to embed links, yo?",
            timeCreated: new Date(Date.now()).toUTCString(), //actual time
            content: "Don't you guys think it's about time?",
            topic: 0,
            votes: 3,
            contentOn: false,
            buttonText: "Show content", //don't need to embed in post class
            read: false,
            backgroundColor: this.col
        }
    ];
    

  constructor() { }

  ngOnInit() {
  }

  toggleContent(selectedPost: Post): void {
      if (selectedPost.contentOn === false) {
          selectedPost.contentOn = true;
          selectedPost.buttonText = "Hide content";
      }
      else {
          selectedPost.contentOn = false;
          selectedPost.buttonText = "Show content";
      }

      if (selectedPost.read === false) {
          selectedPost.read = true;
          selectedPost.backgroundColor = this.viewedCol;
      }
  }

}

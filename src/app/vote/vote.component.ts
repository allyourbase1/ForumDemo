import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
    @Input() votes: number;

  constructor() { }

  ngOnInit() {
  }

  upvote(): void {
      this.votes++; //TODO update actual property, currently just display
  }

  downvote(): void {
      this.votes--;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Topic } from '../topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  animations: [
      trigger('isActive', [
          state('*', style({
              transform: 'translateX(0)'
          })),
          transition('void => *', [style({ transform: 'translateX(70vmin)'}), animate(200)]),
          transition('* => void', [animate(200, style({transform: 'translateX(70vmin)' }))])
      ])
  ]
})
export class TopicComponent implements OnInit {
    @Input() selectedTopic: number; //topic object

    isOpen: string = 'inactive';
    timer: any;

    topics: Topic[] = [
        {
            id: 0,
            name: 'General',
            createdOn: 'Today',
            about: "This is the most generic topic there is. Anything goes!",
            createdBy: 0,
            posts: [0, 1]
        }
    ];

  constructor() { }

  ngOnInit() {
  }
    
  mouseEnter() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.isOpen = 'active', 200);
  }

  mouseLeave() {
      //if show animation in progress, kill it
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.isOpen = 'inactive', 500);
  }

  mouseBack() {
      clearTimeout(this.timer);
  }
}

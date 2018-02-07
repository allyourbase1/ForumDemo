import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    animations: [
        trigger('isActive', [
            state('*', style({
                width: '80vmin',
                height: '*'
            })),
            transition('void => *', [style({ width: 50, height: '1.2em'}), animate(200)]),
            transition('* => void', [animate(200, style({width: 50, height: '1.2em'}))])
        ])
    ]
})

export class UserComponent implements OnInit {
    @Input() selectedUser: number;
    @Input() onTopic: boolean = false;
    isOpen: string = 'inactive';
    timer: any;

    users: User[] = [
        {
            id: 0,
            name: 'TheFirstUser!',
            about: 'Can you feel the love tonight?',
            createdOn: "Today"
        },
        {
            id: 1,
            name: 'McUserson',
            about: 'Doot doot',
            createdOn: "Today"
        }
    ]

  constructor() { }

  ngOnInit() {
  }

  mouseEnter() {
      if (!this.onTopic) {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => this.isOpen = 'active', 200);
      }
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

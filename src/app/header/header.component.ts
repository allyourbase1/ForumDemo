﻿import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() title: string;
    subtitle: string = "The best forum demo ever! - Me";

  constructor() { }

  ngOnInit() {
  }

}

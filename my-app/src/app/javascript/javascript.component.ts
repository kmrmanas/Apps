import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  topicList = [
    'Closure',
    'hoisting',
    'Inheritance'
  ];
  constructor() { }

  ngOnInit() {
  }

}

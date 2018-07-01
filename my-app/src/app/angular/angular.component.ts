import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  topicList = [
    'NgModule',
    'Component',
    'Directive',
    'Service',
    'Pipe',
    'HttpClient',
    'Router',
    'Testing'
  ];
  constructor() { }

  ngOnInit() {
  }

}
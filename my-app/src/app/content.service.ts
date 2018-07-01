import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
//import { from } from 'rxjs/observable/from';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  topic: any;
  jsTopicList: string[] = [
    'Closure',
    'hoisting',
    'Inheritance'
  ];
  angTopicList: string[] = [
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
  getTopicList(type):Observable<string[]>{
    this.topic = type === 'javascript' ? this.jsTopicList : this.angTopicList;
 return of(this.topic);
  }
}

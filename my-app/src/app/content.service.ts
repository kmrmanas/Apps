import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {coursetype} from './app-constant'
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
    'Form',
    'Pipe',
    'HttpClient',
    'Router',
    'Testing'
  ];
  items = ['reactive form'];
  constructor() { }
  getTopicList(type):Observable<string[]>{
    this.topic = type === coursetype.javascript ? this.jsTopicList : this.angTopicList;
 return of(this.topic);
  }
  getDetailContent():Observable<string[]>{
 return of(this.items);
  }
}

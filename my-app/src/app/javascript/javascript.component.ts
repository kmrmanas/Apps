import { Component, OnInit } from '@angular/core';
import {ContentService} from '../content.service'
import { coursetype } from '../app-constant'

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  topicList:Array<string>;
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.getTopicList(coursetype.javascript).subscribe(
      data => this.topicList = data
    )
  }

}

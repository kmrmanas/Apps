import { Component, OnInit } from '@angular/core';
import {ContentService} from '../content.service'

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  topicList:Array<string>;
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.getTopicList('javascript').subscribe(
      data => this.topicList = data
    )
  }

}

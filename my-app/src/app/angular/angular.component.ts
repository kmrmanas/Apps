import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  topicList:Array<string>;
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.getTopicList('angular').subscribe(
      data => this.topicList = data
    )
  }
}

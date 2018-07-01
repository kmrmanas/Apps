import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {
items:string[];
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.getDetailContent().subscribe(
      data => this.items = data
    )
  }

}

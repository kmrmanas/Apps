import { Component } from '@angular/core';
import { DetailContentComponent } from 'src/app/detail-content/detail-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  items = ['reactive form']
}

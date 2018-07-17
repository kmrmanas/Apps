import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReactFormService } from 'src/app/react-form.service';
//import {ReactiveFormComponent} from '../reactive-form/reactive-form.component';

interface UserResponse {
  userId: number,
  id: number,
  title: string
};
interface userFromData {
  title: string,
  body: string,
  userId: number
};
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  getData: UserResponse;
  constructor(private _http: HttpClient, private reactFormService: ReactFormService) { }
  pageError: string;
  userData: userFromData;
  ngOnInit(): void {
    this._http.get<UserResponse>('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      data => {
        this.getData = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.pageError = 'Client Error';
        } else {
          this.pageError = 'Server Error';
        }
      },
    );
    this.reactFormService.userFormSub.subscribe(data => {
      this.userData = data;
      const req = this._http.post('https://jsonplaceholder.typicode.com/posts', this.userData).subscribe(
        resData => {
          console.log(JSON.stringify(resData));
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            this.pageError = 'Client Error';
          } else {
            this.pageError = 'Server Error';
          }
        }
      )
    });

  }

}

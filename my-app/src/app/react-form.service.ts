import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface userFromData {
  title:string,
  body: string,
  userId: number
}

@Injectable({
  providedIn: 'root'
})

export class ReactFormService {
  public userFormSub  = new Subject<userFromData>();
  constructor() { }
  setUserData(data){
    this.userFormSub.next(data);
  }

}

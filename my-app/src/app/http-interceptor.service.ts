import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler,HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
      const newReq = req.clone({
        headers: req.headers.set('content-type' , 'application/json')
      })
    return next.handle(newReq);
  }
}

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class RequestService {
  isDev:boolean;

  constructor(private http:Http) { }

  labCoursesPost(labCourse){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('content/labCourse');
    return this.http.post(ep, labCourse,{headers: headers})
      .map(res => res.json());
  }
  prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }

}

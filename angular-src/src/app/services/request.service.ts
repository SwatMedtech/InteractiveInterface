import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class RequestService {
  isDev: boolean;

  constructor(private http: Http) { }

  labCoursesPost(labCourse) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('content/labCourse');
    return this.http.post(ep, labCourse, {headers: headers})
      .map(res => res.json());
  }
  labCoursePostUpdate(labCourse, id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint(`content/labCourse/${id}`);
    return this.http.put(ep, labCourse, {headers: headers}).map(res => res.json());
  }
  labCoursesGet() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('content/labCourse');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }
  removeLabCourse(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint(`content/labCourse/${id}`);
    return this.http.delete(ep, {headers: headers}).map(res => res.json());
  }
  labPost(lab) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('content/lab');
    return this.http.post(ep, lab, {headers: headers})
      .map(res => res.json());
  }
  labGet() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('content/lab');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }
  removeLab(id){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint(`content/lab/${id}`);
    return this.http.delete(ep, {headers: headers}).map(res => res.json());
  }
  prepEndpoint(ep) {
    if (this.isDev) {
      return ep;
    } else {
      return 'http://localhost:8080/' + ep;
    }
  }

}

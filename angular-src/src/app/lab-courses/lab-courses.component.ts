import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-lab-courses',
  templateUrl: './lab-courses.component.html',
  styleUrls: ['./lab-courses.component.css']
})
export class LabCoursesComponent implements OnInit {
  length: Number;
  labCourses: Array<any>;
  constructor(private request: RequestService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.request.labCoursesGet().subscribe(data => {
      this.length = Object.keys(data).length;
      this.labCourses = [];
      for (let i = 0; i < this.length; i++) {
        this.labCourses.push(data[i]);
      }
    });
  }
}

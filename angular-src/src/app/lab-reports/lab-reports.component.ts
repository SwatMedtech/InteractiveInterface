import { Component, OnInit } from '@angular/core';
import {RequestService} from "../services/request.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lab-reports',
  templateUrl: './lab-reports.component.html',
  styleUrls: ['./lab-reports.component.css']
})
export class LabReportsComponent implements OnInit {

  labName: string;
  description: string;
  number: number;
  labCourses: any;
  length: number;
  array: Array<any>;
  constructor(private request: RequestService) {}
  onSubmit() {
    const labCourse  = {
      labName: this.labName,
      description: this.description,
      number: this.number
    };
    this.request.labCoursesPost(labCourse).subscribe(data =>{
      console.log(data);
    });
  }
  getData() {
    this.request.labCourseget().subscribe(data => {
      this.labCourses = data;
      this.length = data.length;
    });
  }
  increment() {
    this.number = this.number + 1 ;
  }
  decrement() {
    this.number = this.number - 1;
  }
  ngOnInit() {
    this.array = new Array(this.length);
    this.number = 1;
    this.getData();
  }

}

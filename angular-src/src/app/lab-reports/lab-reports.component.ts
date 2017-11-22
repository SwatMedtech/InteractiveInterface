import { Component, OnInit } from '@angular/core';
import {RequestService} from "../services/request.service";

@Component({
  selector: 'app-lab-reports',
  templateUrl: './lab-reports.component.html',
  styleUrls: ['./lab-reports.component.css']
})
export class LabReportsComponent implements OnInit {

  labName: string;
  description: string;
  number: number;
  constructor(private request: RequestService) { }
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
  increment() {
    this.number = this.number + 1 ;
  }
  decrement() {
    this.number = this.number - 1;
  }
  ngOnInit() {
    this.number = 1;
  }

}

import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';
import 'rxjs/add/operator/map';
import {FlashMessagesService} from 'angular2-flash-messages/module';

@Component({
  selector: 'app-lab-reports',
  templateUrl: './lab-reports.component.html',
  styleUrls: ['./lab-reports.component.css']
})
export class LabReportsComponent implements OnInit {

  labCourseName: string;
  description: string;
  number: number;
  labCourses: Array<any>;
  length: number;
  constructor(private request: RequestService, private flashMessage: FlashMessagesService) {}
  onSubmit() {
    const labCourse  = {
      labName: this.labCourseName,
      description: this.description,
      number: this.number
    };
    this.request.labCoursesPost(labCourse).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('a Lab Course has been added successfully', {
          cssClass: 'alert-success text-center',
          timeout: 3000});
      } else {
        this.flashMessage.show('There was a problem with the server', {
          cssClass: 'alert-danger text-center',
          timeout: 3000});
      }
      this.getData();
    });
    document.getElementById('x').click();
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
  onSubmitEdit(i) {
    const labCourse = {
      name: document.getElementById('labNameEdit')['value'],
      content: document.getElementById('descriptionEdit')['value'],
      number: document.getElementById('numberEdit')['value']
    };
    this.request.labCoursePostUpdate(labCourse, this.labCourses[i]._id).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-success text-center',
          timeout: 3000});
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger text-center',
          timeout: 3000});
      }
      this.getData();
    });
    document.getElementById('close').click();
  }
  increment() {
    this.number = this.number + 1 ;
  }
  decrement() {
    this.number = this.number - 1;
  }
  incrementEdit() {
    document.getElementById('numberEdit')['value']++;
  }
  decrementEdit() {
    document.getElementById('numberEdit')['value'] --;
  }
  removeLabCourse(i) {
    this.request.removeLabCourse(this.labCourses[i]._id).subscribe(data => {
      console.log();
    });
    this.getData();
  }
  ngOnInit() {
    this.number = 1;
    this.getData();
  }

}

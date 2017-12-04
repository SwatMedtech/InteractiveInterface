import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';
import * as SurveyEditor from 'surveyjs-editor';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  editor: SurveyEditor.SurveyEditor;
  labName: any;
  labCourses: any;
  labNumber: any;
  length: any;
  labCourse: any;
  labCourseName: any;
  labs: Array<any>;
  constructor(private request: RequestService, private flashMessage: FlashMessagesService) { }
  onSubmit() {
    const lab = {
      labName : this.labName,
      experiment: tinymce.get('addLab').getContent(),
      preLab: JSON.stringify(this.editor.text),
      labCourse: this.labCourse._id,
      labNumber: this.labNumber
    };
    this.request.labPost(lab).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-success text-center',
          timeout: 3000});
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger text-center',
          timeout: 3000});
      }
      this.getLab();
    });
    document.getElementById('close1').click();
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
  getLab() {
    this.request.labGet().subscribe(data => {
      this.length = Object.keys(data).length;
      this.labs = [];
      for (let i = 0; i < this.length; i++){
        this.labs.push(data[i]);
      }
      console.log(this.labs);
    });
  }
  setLabCourse(labCourse) {
    this.labCourse = labCourse;
    this.labCourseName = labCourse.name;
  }
  findLabCourse(id) {
    for (let i = 0; i < this.labCourses.length; i++) {
      if (id === this.labCourses[i]._id ) {
        return this.labCourses[i].name;
      }
    }
  }
  increment() {
    this.labNumber = this.labNumber + 1 ;
  }
  decrement() {
    this.labNumber = this.labNumber - 1;
  }
  incrementEdit() {
    document.getElementById('numberEdit')['value']++;
  }
  decrementEdit() {
    document.getElementById('numberEdit')['value'] --;
  }
  setUp(i) {
    tinymce.get('editLab').setContent(this.labs[i].experiment);
  }
  removeLab(i) {
    this.request.removeLab(this.labs[i]._id).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-success text-center',
          timeout: 3000});
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger text-center',
          timeout: 3000});
      }
      this.getLab();
    });
    document.getElementById('close2').click();
  }
  ngOnInit() {
    this.labNumber = 1;
    this.labCourseName = 'lab Course goes here';
    this.getData();
    this.editor = new SurveyEditor.SurveyEditor('survey', {showJSONEditorTab: false});
    this.getLab();
  }

}

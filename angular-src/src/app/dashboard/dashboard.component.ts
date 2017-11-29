import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  editor: SurveyEditor.SurveyEditor;

  constructor() { }

  ngOnInit() {
  }

}

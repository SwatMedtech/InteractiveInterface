import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';

@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.css']
})
export class SurveyEditorComponent implements OnInit {
  editor: SurveyEditor.SurveyEditor;
  constructor() { }

  ngOnInit() {
    this.editor = new SurveyEditor.SurveyEditor('survey');
  }

}

import { Component, OnInit, Input } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  @Input() set json (value: object) {
    const surveyModel = new Survey.ReactSurveyModel(value);
    Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  labName: any;
  labNumber: any;
  constructor() { }
  ngOnInit() {
  }

}

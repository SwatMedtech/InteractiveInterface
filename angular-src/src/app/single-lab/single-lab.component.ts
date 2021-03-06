import { Component, OnInit, OnDestroy  } from '@angular/core';
import {RequestService} from '../services/request.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-lab',
  templateUrl: './single-lab.component.html',
  styleUrls: ['./single-lab.component.css']
})
export class SingleLabComponent implements OnInit, OnDestroy {
  labCourseName: any;
length: Number;
labs: Array<any>;
newLabs: Array<any>;
  labCourses: Array<any>;
  id: number;
  private sub: any;
  constructor(private request: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getLab();
  }
  getID() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
    this.getData();
  }
  getData() {
    this.request.labCoursesGet().subscribe(data => {
      this.length = Object.keys(data).length;
      this.labCourses = [];
      for (let i = 0; i < this.length; i++) {
        this.labCourses.push(data[i]);
        if (this.labCourses[i]._id === this.id) {
          this.labCourseName = this.labCourses[i].name;
        }
      }
    });
  }
  getLab() {
    this.request.labGet().subscribe(data => {
      this.getID();
      this.length = Object.keys(data).length;
      this.labs = [];
      for (let i = 0; i < this.length; i++) {
        this.labs.push(data[i]);
      }
      this.getRightLab();
    });
  }
  getRightLab() {
    this.newLabs = [];
    for (let i = 0; i < this.labs.length; i++) {
      if (this.labs[i].labCourse === this.id ) {
        this.newLabs.push(this.labs[i]);
      }
    }
    console.log(this.newLabs);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

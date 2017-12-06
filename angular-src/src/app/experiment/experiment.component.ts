import { Component, OnInit, OnDestroy  } from '@angular/core';
import {RequestService} from '../services/request.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit, OnDestroy {
  length: Number;
  labs: Array<any>;
  id: number;
  html: any;
  private sub: any;
  prev: any;
  constructor(private request: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getLab();
  }
  getID() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
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
    for (let i = 0; i < this.labs.length; i++) {
      if (this.labs[i]._id === this.id ) {
        this.prev = this.labs[i].labCourse;
        this.html = this.labs[i].experiment;
      }
    }
    // this.html = this.html.slice(0 , this.html.length);
    console.log(this.html);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

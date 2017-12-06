import { Component, OnInit, OnDestroy  } from '@angular/core';
import {RequestService} from '../services/request.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pre-lab',
  templateUrl: './pre-lab.component.html',
  styleUrls: ['./pre-lab.component.css']
})
export class PreLabComponent implements OnInit, OnDestroy {
  length: Number;
  labs: Array<any>;
  id: number;
  json: any;
  prev: any;
  private sub: any;
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
        this.json = JSON.parse(this.labs[i].preLab);
      }
    }
    console.log(this.json);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

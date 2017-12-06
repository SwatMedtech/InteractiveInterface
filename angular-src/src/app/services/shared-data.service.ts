import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  data: any;
  constructor() { }
  getData() {
    return this.data;
  }
  setData(data) {
    this.data = data;
  }
}

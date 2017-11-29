import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-tinyeditor',
  templateUrl: './tinyeditor.component.html',
  styleUrls: ['./tinyeditor.component.css']
})
export class TinyeditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() elementId: String;
  editor;

  constructor() { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: '../assets/skins/lightgray',
      height : '400'
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}

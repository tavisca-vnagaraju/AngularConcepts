import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../drag-drop.directive';
@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  files: FileHandle[] = [];
  fileHandlesArray = [];
  constructor() { }
  
  filesDropped(files: FileHandle[]): void {
    this.files = files;
    this.fileHandlesArray.push(files);
    console.log(this.fileHandlesArray);
  }
  
  upload(): void {
    //get image upload file obj;
  }
  
  ngOnInit() {
  }

}

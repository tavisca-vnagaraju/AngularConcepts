import { Component, OnInit ,DoCheck } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent implements OnInit,DoCheck {

  constructor(private productsService:ProductsService) { }
  inputString:string;
  data:any;
  ngOnInit() {
  }
  ngDoCheck(){
    this.inputString = this.productsService.getInputStringFromSiblingTwo();
    this.data = this.productsService.getData();
    console.log(this.data);
    // console.log(this.productsService.getInputStringFromSiblingTwo());
  }
}

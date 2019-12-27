import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css']
})
export class SiblingTwoComponent implements OnInit{

  constructor(private productsService:ProductsService) { }
  name:string;
  onKeyUp(event):void{
    this.name = event.target.value;
  }
  submitInput(){
    this.productsService.inputFromSibling(this.name);
  }
  ngOnInit() {
    
  }
  

}

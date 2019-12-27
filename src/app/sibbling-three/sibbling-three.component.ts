import { Component, OnInit } from "@angular/core";
import { ProductsService } from '../products.service';

@Component({
  selector: "app-sibbling-three",
  templateUrl: "./sibbling-three.component.html",
  styleUrls: ["./sibbling-three.component.css"]
})
export class SibblingThreeComponent implements OnInit {
  constructor(private productsService:ProductsService) {}
  firstName: string;
  lastName: string;
  data: any;
  ngOnInit() {
    this.data = {
      "firstName":"",
      "lastName":""
    }
  }
  firstNameKeyup(event: any): void {
    this.firstName = event.target.value;
    if (this.firstName != undefined) {
      this.data.firstName = this.firstName;
    }
    this.callService();
  }
  lastNameKeyup(event: any): void {
    this.lastName = event.target.value;
    if (this.lastName != undefined) {
      this.data.lastName = this.lastName;
    }
    this.callService();
  }
  callService(){
    if(this.data.firstName != "" && this.data.lastName != ""){
      this.productsService.setData(this.data);
    }
  }
}

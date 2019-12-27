import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  employeDetails = [
    {
      "tribename":"checkout",
      "developers":[
        {
          "name":"Peter Parker",
          "designation":"Java Developer",
          "department":"developer"
        },
        {
          "name":"Jack",
          "designation":"Manager",
          "department":"management"
        },
        {
          "name":"Joe",
          "designation":"Bussiness",
          "department":"bussiness"
        }
      ]
    },
    {
      "tribename":"checkout",
      "developers":[
        {
          "name":"Tony",
          "designation":"AI Developer",
          "department":"developer"
        },
        {
          "name":"Rhodey",
          "designation":"Manager",
          "department":"management"
        },
        {
          "name":"Vision",
          "designation":"Bussiness",
          "department":"bussiness"
        }
      ]
    },
    {
      "tribename":"enablement",
      "developers":[
        {
          "name":"Gwen",
          "designation":"C# Developer",
          "department":"developer"
        },
        {
          "name":"Ben",
          "designation":"Manager",
          "department":"management"
        },
        {
          "name":"Max",
          "designation":"Bussiness",
          "department":"bussiness"
        }
      ]
    },
    {
      "tribename":"flights",
      "developers":[
        {
          "name":"Jetry",
          "designation":"C# Developer",
          "department":"developer"
        },
        {
          "name":"Iron Man",
          "designation":"Manager",
          "department":"management"
        },
        {
          "name":"Atom",
          "designation":"Bussiness",
          "department":"bussiness"
        }
      ]
    }
 ]
  inputString:string;
  data:any;
  constructor(private http: HttpClient) { 
    this.data = {
      "firstName":"",
      "lastName":""
    }
  }
  apiUrl = "http://demo3611341.mockable.io/employeDetails";
  getEmployeDetails():any{
    return this.employeDetails;
  }
  getEmployeDetailsFromApi():any{
    return this.http.get(this.apiUrl);
  }
  inputFromSibling(inputString:string):void{
    this.inputString = inputString;
  }
  getInputStringFromSiblingTwo():string{
    return this.inputString;
  }
  setData(data:any){
    this.data = data;
  }
  getData(){
    return this.data;
  }
}
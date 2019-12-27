import { Component,Input,Output,EventEmitter, OnInit} from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css'],
})
export class ContentTableComponent implements OnInit {
  ngOnInit(): void {
    // this.employeDetails = this.productsService.getEmployeDetails();
    this.productsService.getEmployeDetailsFromApi().subscribe(
      (response) => this.employeDetails=response,
      (error) => console.log(error)
    );
  }
  @Input() clickedButtonName: string;
  @Output() changedButtonNameEvent = new EventEmitter<string>();
  employeDetails:any;
  testData:any;
  onKeyUp(event){
    this.changedButtonNameEvent.emit(event.target.value);
  }
  
  constructor(private productsService:ProductsService) {
  }

}
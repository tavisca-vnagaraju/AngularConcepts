import { Component , Input ,Output,EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-navigation-tab',
  templateUrl: './navigation-tab.component.html',
  styleUrls: ['./navigation-tab.component.css']
})
export class NavigationTabComponent {
  buttonNames = ["Checkout","Enablement","Flights","Chai"];
  isButtonClicked = false;
  @Input() clickedButtonName: string;
  @Output() changedButtonNameEvent = new EventEmitter<string>();
  onButtonClick(value:string){
    this.isButtonClicked = true;
    this.clickedButtonName = value;
  }
  receiveMessage($event){
    let index = this.buttonNames.indexOf(this.clickedButtonName);
    this.clickedButtonName =  $event;
    this.buttonNames[index]=this.clickedButtonName;
  }
}

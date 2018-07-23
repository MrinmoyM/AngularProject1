import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@Input() 
  selectedComponent : string;
  pageComponentSelect(eventData){
    console.log(eventData);
    this.selectedComponent = eventData;
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
    selector : 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() pageComponentSelectEvent = new EventEmitter<string>();

    onMenuSelect(eventData){
        //console.log(eventData);
        this.pageComponentSelectEvent.emit(eventData.srcElement.innerText);
    }
}
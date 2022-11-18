import { Component } from '@angular/core';
import {Filters, ICard} from "./models/IGetInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heartstone-cards';
  filtersValue: Filters

  updateFilters(newValue:Filters){
    this.filtersValue = newValue
  }
}

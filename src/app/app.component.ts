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
  cardDetails: ICard | null

  updateFilters(newValue:Filters){
    this.cardDetails = null;
    this.filtersValue = newValue
  }
  updateCardDetails(card: ICard){
    this.cardDetails = card
  }
}

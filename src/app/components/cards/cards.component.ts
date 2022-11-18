import { Component, OnInit, Input, Directive } from '@angular/core';
import {getInfoService} from "../../services/getInfo";
import {ICard} from "../../models/IGetInfo";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  constructor(public getInfoService: getInfoService) { }

  cards: ICard[]
  loading: boolean = true
  page: number = 1
  currentPageItems: ICard[] = []

  ngOnInit(): void {
    this.getInfoService.getCardsByClass('Hunter').subscribe(data => {
      this.cards = data;
      for(let i = 1; i <= 10; i++){
        this.page > 0 ? this.currentPageItems.push(this.cards[(i-1) * (this.page * 10)]) : this.currentPageItems.push(this.cards[i-1])
      }
      this.loading = false
      console.log(this.currentPageItems)
    })
  }

}

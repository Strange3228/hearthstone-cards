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
  totalPages: number = 1;
  currentPageItems: ICard[] = []

  changePage(event: any, direction: boolean){
    event.preventDefault()
    this.currentPageItems = []
    direction ? this.page++ : this.page--
    for(let i = 0; i < 10; i++){
      this.page > 1 ? this.currentPageItems[i] = this.cards[i + ((this.page - 1) * 10)] : this.currentPageItems[i] = this.cards[i]
    }
  }

  ngOnInit(): void {
    this.getInfoService.getCardsByClass('classes','Death Knight').subscribe(data => {
      this.cards = data;
      for(let i = 0; i < 10; i++){
        this.currentPageItems[i] = this.cards[i]
      }
      this.loading = false
      this.totalPages = this.cards.length / 10
      this.cards.length % 10 === 0 ? this.totalPages = this.cards.length / 10 : this.totalPages = Math.floor(this.cards.length / 10) + 1
      console.log(this.cards)
      console.log(this.currentPageItems)
    })
  }

}

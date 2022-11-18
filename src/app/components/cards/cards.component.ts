import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {getInfoService} from "../../services/getInfo";
import {Filters, ICard} from "../../models/IGetInfo";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnChanges {

  constructor(public getInfoService: getInfoService) { }

  cards: ICard[]
  loading: boolean = true
  page: number = 1
  totalPages: number = 1;
  currentPageItems: ICard[] = []

  @Input() filters:Filters

  changePage(event: any, direction: boolean){
    event.preventDefault()
    this.currentPageItems = []
    direction ? this.page++ : this.page--
    for(let i = 0; i < 10; i++){
      this.page > 1 ? this.currentPageItems[i] = this.cards[i + ((this.page - 1) * 10)] : this.currentPageItems[i] = this.cards[i]
    }
  }

  showDetails(card: ICard){
    console.log(card)
  }

  ngOnInit(): void {
    this.getInfoService.getCardsByClass('classes','Death Knight').subscribe(data => {
      this.reloadCards(data)
    })
  }

  /*Function checks when filters are changing*/
  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['filters'] != 'undefined') {
      if(this.filters.classes != ''){
        this.loading = true
        this.page = 1
        this.totalPages = 1
        this.getInfoService.getCardsByClass('classes',this.filters.classes).subscribe(data => {
          this.reloadCards(data)
        })
      }
    }
  }

  /*Function for setting data after successfull API get response */
  reloadCards(data:any){
    this.cards = data;
    for(let i = 0; i < 10; i++){
      this.currentPageItems[i] = this.cards[i]
    }
    this.loading = false
    this.totalPages = this.cards.length / 10
    this.cards.length % 10 === 0 ? this.totalPages = this.cards.length / 10 : this.totalPages = Math.floor(this.cards.length / 10) + 1
  }
}

import {Component, OnInit, Input, OnChanges, SimpleChanges, Output} from '@angular/core';
import {getInfoService} from "../../services/getInfo";
import {Filters, ICard} from "../../models/IGetInfo";
import {count} from "rxjs";

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

 //@Output() cardDetails:

  @Input() filters:Filters

  changePage(event: any, direction: boolean){
    event.preventDefault()
    this.currentPageItems = []
    direction ? this.page++ : this.page--
    for(let i = 0; i < 10; i++){
      this.page > 1 ? this.currentPageItems[i] = this.cards[i + ((this.page - 1) * 10)] : this.currentPageItems[i] = this.cards[i]
    }
    console.log(this.currentPageItems)
  }

  showDetails(card: ICard){
    console.log(card)
  }

  ngOnInit(): void {
    this.getInfoService.getCardsByClass('classes','Death Knight').subscribe(data => {
      this.reloadCards(data, '', '')
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
          this.reloadCards(data, this.filters.type, this.filters.qualities)
        })
      }
    }
  }

  /*Function for setting data after successfull API GET response */
  reloadCards(data:any, type: string, quality: string){
    this.cards = data;
    console.log(this.cards)

    /*FILTERS*/
    if(type != ''){
      this.cards = this.cards.filter(card => card.type === this.filters.type)
    }
    if(quality != ''){
      this.cards = this.cards.filter(card => card.rarity === this.filters.qualities)
    }

    /*REMOVE CARD DUPLICATES*/
    let prevCardName: string = this.cards[0].name
    let counter: number = 1;
    while(counter < this.cards.length - 1){
      if(prevCardName === this.cards[counter].name){
        this.cards.splice(counter, 1)
      } else {
        prevCardName = this.cards[counter].name
        counter++
      }
    }

    console.log(this.cards)
    this.cards = this.cards.reverse()
    for(let i = 0; i < 10; i++){
      this.currentPageItems[i] = this.cards[i]
    }
    this.loading = false
    this.totalPages = this.cards.length / 10
    this.cards.length % 10 === 0 ? this.totalPages = this.cards.length / 10 : this.totalPages = Math.floor(this.cards.length / 10) + 1
  }
}

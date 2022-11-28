import { Component, OnInit, Input } from '@angular/core';
import {ICard} from "../../models/IGetInfo";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor( ) {
  }

  @Input() detailsCard: any

  ngOnInit(): void {
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {getInfoService} from "../../services/getInfo";
import {Filters, IGEtInfo} from "../../models/IGetInfo";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(public getInfoService: getInfoService) { }

  info: IGEtInfo
  loading: boolean = true

  @Output() selectValues = new EventEmitter<Filters>()

  filtersChanged(Hsclass: string, factions: string, qualities: string, races: string, type: string){
    this.selectValues.emit({classes: Hsclass, factions: factions, qualities: qualities, races: races, type: type})
  }


  ngOnInit(): void {
    this.getInfoService.getInfo().subscribe(data => {
      this.info = data
      this.loading = false
      console.log(this.info)
    })
  }

}

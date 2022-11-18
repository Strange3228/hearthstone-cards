import { Component, OnInit } from '@angular/core';
import {getInfoService} from "../../services/getInfo";
import {IGEtInfo} from "../../models/IGetInfo";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(public getInfoService: getInfoService) { }

  info: IGEtInfo
  loading: boolean = true

  ngOnInit(): void {
    this.getInfoService.getInfo().subscribe(data => {
      this.info = data
      this.loading = false
      console.log(this.info)
    })
  }

}

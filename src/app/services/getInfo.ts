import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGEtInfo} from "../models/IGetInfo";

@Injectable({
  providedIn:'root',
})

export class getInfoService {
  constructor(private http:HttpClient) {
  }

  headers = new HttpHeaders({
    'X-RapidAPI-Key': '22e6195d24msh052eb23f6ccd1acp15dfd6jsnb662197a7f3f',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  })

  getInfo():Observable<IGEtInfo>{
    return this.http.get<IGEtInfo>('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', {
      headers: this.headers
    })
  }

  getCardsByClass(className: string):Observable<any>{
    return this.http.get<any>(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${className}`,{
      headers: this.headers
    })
  }
}

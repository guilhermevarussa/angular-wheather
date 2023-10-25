import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWheather } from '../models/wheadther';

@Injectable({
  providedIn: 'root'
})
export class NewWheatherService {

  key = '9f2c82ad3ca711c185c0c9930579e05d';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  wheatherData!: IWheather | any

  image!: any;

  imageUrl = `http://openweathermap.org/img/wn`



  constructor(private http: HttpClient) { }



  getWheatherData(city: string): Observable<IWheather> {

    const apikey = this.key

    return this.wheatherData = this.http.get<IWheather>(`${this.apiUrl}?q=${city}&appid=${apikey}`)

  }


  getImage(data: IWheather): Observable<any> {

    return this.image = this.http.get(`${this.imageUrl}/${data.weather[0].icon}.png`)

  }

}

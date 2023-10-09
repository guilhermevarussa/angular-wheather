import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  APIkEY = '9f2c82ad3ca711c185c0c9930579e05d';
  baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${'Sydinei'}&units=metric&appid=${this.APIkEY}&lang=en`;

  wheatherData!: any;

  constructor(private http: HttpClient) { }



  getWeatherData(city: string): Observable<any> {

    const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${'London'}&units=metric&appid=${this.APIkEY}&lang=en}`;

    this.wheatherData = this.http.get<any>(newUrl);

    console.log('data',this.wheatherData);

    return this.wheatherData;

  };


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  private apiKey = 'c18e1512aamshf31f7516332d281p18f3f5jsnb849c0dba9e2';
  private apiUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    });

    return this.http.get(`${this.apiUrl}?city=${city}`, { headers });
  }
}



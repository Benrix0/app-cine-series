import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './models/content.model';

@Injectable({
  providedIn: 'root'
})

export class ContentServiceService {

  baseURL: string = 'https://app-cine-series-back.herokuapp.com';
  content: any[] = [];

  constructor(private http: HttpClient) { }

  addPlatform(platform: string) {
    
  }

  getContent(): Observable<any> {
    return this.http.get<any[]>(`${this.baseURL}/get-content?byID=0`)
  }

  getContentByID(id: String): Observable<any> {
    return this.http.get<any[]>(`${this.baseURL}/get-content?byID=1&id=${id}`)
  }

  sendContent(content: Content) {
    let url: string;
    if (content.isSerie) {
      url = `${this.baseURL}/add-content?title=${content.title}&description=${content.description}&platforms=${content.platforms}&image=${content.images}&saisons=${content.episodes}`
    } else {
      url = `${this.baseURL}/add-content?title=${content.title}&description=${content.description}&platforms=${content.platforms}&image=${content.images}&time=${content.time}`;
    }
    url = encodeURIComponent(url);
    return this.http.post(url, 'body')
  }

  getPlatforms() {
    return this.http.get(`${this.baseURL}/get-platforms`)
  }
}
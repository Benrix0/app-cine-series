import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContentServiceService {

  baseURL: string = 'http://localhost:3000';
  content: any[] = [];

  constructor(private http: HttpClient) { }

  getContent(): any[] {
    return this.content;
  }

  setContent() {
    this.http.get<any[]>(`${this.baseURL}/get-content?byID=0`).subscribe(
      content => { this.content = content; console.log(content) },
      error => { console.log(error) }
    )
  }
}
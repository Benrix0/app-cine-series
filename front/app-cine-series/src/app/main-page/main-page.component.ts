import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private titleService: Title,
              private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.contentService.setContent();
    console.log(this.titleService.getTitle());
    this.titleService.setTitle('Ciné séries');
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-see-content',
  templateUrl: './see-content.component.html',
  styleUrls: ['./see-content.component.scss']
})
export class SeeContentComponent implements OnInit {

  constructor(private titleService: Title,
    private contentService: ContentServiceService) { }
  
  ngOnInit(): void {
    this.titleService.setTitle('Trouver un film ou une série');
    this.contentService.setContent();
  }

  contentArray: any[] = this.contentService.content;
}

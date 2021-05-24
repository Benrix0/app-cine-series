import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentServiceService } from '../content-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-see-content',
  templateUrl: './see-content.component.html',
  styleUrls: ['./see-content.component.scss']
})
export class SeeContentComponent implements OnInit, OnDestroy {

  contentSubscription!: Subscription;
  contentArray!: Array<any>;

  constructor(private titleService: Title,
    private contentService: ContentServiceService) { }
  
  ngOnInit(): void {
    this.titleService.setTitle('Trouver un film ou une série');
    this.contentSubscription = this.contentService.getContent().subscribe(
      content => { this.contentArray = content}
    )
  }

  ngOnDestroy(): void {
    this.contentSubscription.unsubscribe();
  }
}

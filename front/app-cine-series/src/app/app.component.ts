import { Component } from '@angular/core';
import { ContentServiceService } from './content-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private contentService: ContentServiceService) { }
  
  ngOnInit(): void {
  }
}

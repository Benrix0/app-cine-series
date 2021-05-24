import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { ContentServiceService } from '../content-service.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit, OnDestroy {

  images = [' '];
  platformsSelection!: Array<string>;
  platforms!: any;
  platformsSubscription!: Subscription;

  constructor(private titleService: Title,
              private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ajouter un film ou une série');
    this.platformsSubscription = this.contentService.getPlatforms().subscribe(
      platforms => {this.platforms = platforms},
      err => {console.log(err)}
    )
  }

  ngOnDestroy(): void {
    this.platformsSubscription.unsubscribe()
  }

  onAddLink() {
    this.images.push('');
  }

  onSubmit(form: NgForm) {
    console.log(form['_directives'])
  }
}

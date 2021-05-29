import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Content } from '../models/content.model';
import { Subscription } from 'rxjs/Subscription';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit, OnDestroy {

  contentForm!: FormGroup;
  isSerie!: boolean;
  platforms!: any;
  platformSubscriptions!: Subscription;
  platformsSelection!: Array<string>;

  constructor(private titleService: Title,
              private formBuilder: FormBuilder,
              private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ajouter un film ou une série');
    this.initForm();
    this.platformSubscriptions = this.contentService.getPlatforms().subscribe(
      value => this.platforms = value,
      error => console.log(error)
    )
  }

  initForm(): void {
    this.contentForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      isSerie: false,
      time: ''
    })
  }

  onSubmitForm(): void {
    const formValue = this.contentForm.value
    const newContent = new Content(
      formValue['title'],
      formValue['description'],
      this.platformsSelection,
      [''],
      formValue['isSerie'],
      [''],
      'HH:MM:SS'
    );
    console.log(newContent);
  }

  onSelectType(value: any): void {
    this.isSerie = value;
  }

  onSelectPlatform(value: any): void {
    this.platformsSelection = value;
  }

  ngOnDestroy(): void {
    this.platformSubscriptions.unsubscribe()
  }
}
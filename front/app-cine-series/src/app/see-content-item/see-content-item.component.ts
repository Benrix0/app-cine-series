import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-see-content-item',
  templateUrl: './see-content-item.component.html',
  styleUrls: ['./see-content-item.component.scss']
})
export class SeeContentItemComponent implements OnInit {

  @Input() title!: String;
  @Input() description!: string;
  @Input() platforms!: Array<String>;

  constructor() { }

  ngOnInit(): void {
  }

}

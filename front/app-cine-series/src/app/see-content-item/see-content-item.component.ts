import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-see-content-item',
  templateUrl: './see-content-item.component.html',
  styleUrls: ['./see-content-item.component.scss']
})
export class SeeContentItemComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() platforms!: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}

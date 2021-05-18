import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeContentItemComponent } from './see-content-item.component';

describe('SeeContentItemComponent', () => {
  let component: SeeContentItemComponent;
  let fixture: ComponentFixture<SeeContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeContentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

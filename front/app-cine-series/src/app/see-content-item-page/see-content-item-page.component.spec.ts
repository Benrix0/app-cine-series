import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeContentItemPageComponent } from './see-content-item-page.component';

describe('SeeContentItemPageComponent', () => {
  let component: SeeContentItemPageComponent;
  let fixture: ComponentFixture<SeeContentItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeContentItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeContentItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

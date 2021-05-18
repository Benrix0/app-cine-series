import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeContentComponent } from './see-content.component';

describe('SeeContentComponent', () => {
  let component: SeeContentComponent;
  let fixture: ComponentFixture<SeeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

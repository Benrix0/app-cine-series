import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePresentationComponent } from './see-presentation.component';

describe('SeePresentationComponent', () => {
  let component: SeePresentationComponent;
  let fixture: ComponentFixture<SeePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

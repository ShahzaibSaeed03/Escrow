import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDetailsSubmitted } from './review-details-submitted';

describe('ReviewDetailsSubmitted', () => {
  let component: ReviewDetailsSubmitted;
  let fixture: ComponentFixture<ReviewDetailsSubmitted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewDetailsSubmitted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewDetailsSubmitted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSectionDetails } from './update-section-details';

describe('UpdateSectionDetails', () => {
  let component: UpdateSectionDetails;
  let fixture: ComponentFixture<UpdateSectionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSectionDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSectionDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualRegistration } from './manual-registration';

describe('ManualRegistration', () => {
  let component: ManualRegistration;
  let fixture: ComponentFixture<ManualRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

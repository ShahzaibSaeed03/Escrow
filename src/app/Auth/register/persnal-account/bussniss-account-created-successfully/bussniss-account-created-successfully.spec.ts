import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussnissAccountCreatedSuccessfully } from './bussniss-account-created-successfully';

describe('BussnissAccountCreatedSuccessfully', () => {
  let component: BussnissAccountCreatedSuccessfully;
  let fixture: ComponentFixture<BussnissAccountCreatedSuccessfully>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussnissAccountCreatedSuccessfully]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussnissAccountCreatedSuccessfully);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

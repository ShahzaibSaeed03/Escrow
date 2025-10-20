import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersnalFaAuthentication } from './persnal-fa-authentication';

describe('PersnalFaAuthentication', () => {
  let component: PersnalFaAuthentication;
  let fixture: ComponentFixture<PersnalFaAuthentication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersnalFaAuthentication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersnalFaAuthentication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

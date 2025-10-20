import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersnalAccount } from './persnal-account';

describe('PersnalAccount', () => {
  let component: PersnalAccount;
  let fixture: ComponentFixture<PersnalAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersnalAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersnalAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

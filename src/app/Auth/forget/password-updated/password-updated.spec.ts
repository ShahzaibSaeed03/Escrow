import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswprdUpdated } from './password-updated';

describe('PasswprdUpdated', () => {
  let component: PasswprdUpdated;
  let fixture: ComponentFixture<PasswprdUpdated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswprdUpdated]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswprdUpdated);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

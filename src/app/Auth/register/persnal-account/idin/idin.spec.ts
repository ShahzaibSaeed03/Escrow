import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Idin } from './idin';

describe('Idin', () => {
  let component: Idin;
  let fixture: ComponentFixture<Idin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Idin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Idin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

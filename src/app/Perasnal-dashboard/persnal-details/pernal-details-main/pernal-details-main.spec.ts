import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PernalDetailsMain } from './pernal-details-main';

describe('PernalDetailsMain', () => {
  let component: PernalDetailsMain;
  let fixture: ComponentFixture<PernalDetailsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PernalDetailsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PernalDetailsMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

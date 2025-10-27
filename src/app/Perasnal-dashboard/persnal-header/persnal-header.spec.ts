import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersnalHeader } from './persnal-header';

describe('PersnalHeader', () => {
  let component: PersnalHeader;
  let fixture: ComponentFixture<PersnalHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersnalHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersnalHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

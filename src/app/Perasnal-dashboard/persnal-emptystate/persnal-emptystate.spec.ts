import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersnalEmptystate } from './persnal-emptystate';

describe('PersnalEmptystate', () => {
  let component: PersnalEmptystate;
  let fixture: ComponentFixture<PersnalEmptystate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersnalEmptystate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersnalEmptystate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

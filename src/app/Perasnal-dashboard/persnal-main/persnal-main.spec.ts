import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersnalMain } from './persnal-main';

describe('PersnalMain', () => {
  let component: PersnalMain;
  let fixture: ComponentFixture<PersnalMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersnalMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersnalMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

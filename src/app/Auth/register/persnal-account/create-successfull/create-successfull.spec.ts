import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuccessfull } from './create-successfull';

describe('CreateSuccessfull', () => {
  let component: CreateSuccessfull;
  let fixture: ComponentFixture<CreateSuccessfull>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSuccessfull]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSuccessfull);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

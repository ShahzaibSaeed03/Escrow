import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMilestone } from './approve-milestone';

describe('ApproveMilestone', () => {
  let component: ApproveMilestone;
  let fixture: ComponentFixture<ApproveMilestone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveMilestone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveMilestone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

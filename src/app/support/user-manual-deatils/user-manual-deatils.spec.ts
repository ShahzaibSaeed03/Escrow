import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManualDeatils } from './user-manual-deatils';

describe('UserManualDeatils', () => {
  let component: UserManualDeatils;
  let fixture: ComponentFixture<UserManualDeatils>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManualDeatils]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManualDeatils);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

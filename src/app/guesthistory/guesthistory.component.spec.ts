import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestHistoryComponent } from './guesthistory.component';

describe('GuesthistoryComponent', () => {
  let component: GuestHistoryComponent;
  let fixture: ComponentFixture<GuestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

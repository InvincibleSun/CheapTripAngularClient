import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTravelComponent } from './budget-travel.component';

describe('BudgetTravelComponent', () => {
  let component: BudgetTravelComponent;
  let fixture: ComponentFixture<BudgetTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

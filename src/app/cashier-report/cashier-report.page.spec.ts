import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashierReportPage } from './cashier-report.page';

describe('CashierReportPage', () => {
  let component: CashierReportPage;
  let fixture: ComponentFixture<CashierReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

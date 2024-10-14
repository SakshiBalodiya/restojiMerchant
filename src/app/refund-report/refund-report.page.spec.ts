import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefundReportPage } from './refund-report.page';

describe('RefundReportPage', () => {
  let component: RefundReportPage;
  let fixture: ComponentFixture<RefundReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilltypeReportPage } from './billtype-report.page';

describe('BilltypeReportPage', () => {
  let component: BilltypeReportPage;
  let fixture: ComponentFixture<BilltypeReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltypeReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

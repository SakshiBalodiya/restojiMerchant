import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GstReportPage } from './gst-report.page';

describe('GstReportPage', () => {
  let component: GstReportPage;
  let fixture: ComponentFixture<GstReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GstReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

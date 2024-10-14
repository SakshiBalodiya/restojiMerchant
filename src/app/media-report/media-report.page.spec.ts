import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaReportPage } from './media-report.page';

describe('MediaReportPage', () => {
  let component: MediaReportPage;
  let fixture: ComponentFixture<MediaReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

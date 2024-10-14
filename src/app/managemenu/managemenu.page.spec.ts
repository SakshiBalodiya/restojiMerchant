import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagemenuPage } from './managemenu.page';

describe('ManagemenuPage', () => {
  let component: ManagemenuPage;
  let fixture: ComponentFixture<ManagemenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

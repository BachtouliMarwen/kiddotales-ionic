import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndingsPage } from './endings.page';

describe('EndingsPage', () => {
  let component: EndingsPage;
  let fixture: ComponentFixture<EndingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EndingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryFormPage } from './CategoryFormPage';

describe('CategoryFormPage', () => {
  let component: CategoryFormPage;
  let fixture: ComponentFixture<CategoryFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

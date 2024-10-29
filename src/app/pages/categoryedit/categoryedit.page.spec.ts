import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryeditPage } from './categoryedit.page';

describe('CategoryeditPage', () => {
  let component: CategoryeditPage;
  let fixture: ComponentFixture<CategoryeditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

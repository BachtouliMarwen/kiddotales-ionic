import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryformPage } from './storyform.page';

describe('StoryformPage', () => {
  let component: StoryformPage;
  let fixture: ComponentFixture<StoryformPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

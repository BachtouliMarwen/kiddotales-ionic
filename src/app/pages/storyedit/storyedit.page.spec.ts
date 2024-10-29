import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryeditPage } from './storyedit.page';

describe('StoryeditPage', () => {
  let component: StoryeditPage;
  let fixture: ComponentFixture<StoryeditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

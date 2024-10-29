import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorydetailPage } from './storydetail.page';

describe('StorydetailPage', () => {
  let component: StorydetailPage;
  let fixture: ComponentFixture<StorydetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StorydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

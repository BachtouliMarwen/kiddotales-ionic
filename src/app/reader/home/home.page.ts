import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Story } from 'src/app/models/story.model';
import { CategoryService } from 'src/app/services/category.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categories: Category[] = [];
  stories: Story[] = [];

  constructor(
    private categoryservice: CategoryService,
    private storyService: StoryService
  ) {}

  ngOnInit(){
    this.loadCategories();
    this.loadStories(); 
  }

  loadCategories(){
    this.categoryservice.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  loadStories(){
    this.storyService.getStories().subscribe((data) => {
      this.stories = data;
    })
  }

}

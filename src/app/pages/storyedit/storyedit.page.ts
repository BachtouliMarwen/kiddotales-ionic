import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Story } from 'src/app/models/story.model';
import { CategoryService } from 'src/app/services/category.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-storyedit',
  templateUrl: './storyedit.page.html',
  styleUrls: ['./storyedit.page.scss'],
})
export class StoryeditPage implements OnInit {

  storyForm!: FormGroup;
  story!: Story;
  categories: Category[] = []
  
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storyService: StoryService,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.storyForm= this.fb.group({
      title: [''],
      content: [''],
      categoryId: ['']
    });

    const storyId = this.route.snapshot.paramMap.get('id');
    if (storyId){
      this.loadStoryData(storyId);
    }
    this.loadCategories(); 
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data; 
      },
      error => {
        console.error('Error loading categories', error);
      }
    );
  }

  async loadStoryData(storyId: string){
    this.storyService.getStoryById(storyId).subscribe(story =>{
      if (story){
        this.story=story;
        this.storyForm.patchValue({
          title: this.story.title,
          content: this.story.content,
          categoryId: this.story.categoryId
        });
      }
    });
  }

  async saveChanges() {
    if (this.storyForm.valid) {
      const updatedStory: Story= {
        ...this.story,
        ...this.storyForm.value
      };
      await this.storyService.updateStory(updatedStory.id!, updatedStory);
      this.router.navigate(['/admin/stories']);
    }
  }
}

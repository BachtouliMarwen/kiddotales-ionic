import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Story } from 'src/app/models/story.model';
import { CategoryService } from 'src/app/services/category.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-storyform',
  templateUrl: './storyform.page.html',
  styleUrls: ['./storyform.page.scss'],
})
export class StoryformPage implements OnInit {

  storyForm!: FormGroup;
  categories: Category[] = []


  constructor(
    private fb: FormBuilder,
    private storyService: StoryService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.storyForm = this.fb.group({
      title: [''],
      content: [''],
      categoryId: [''],
      categoryName: ['']
    });
   }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data ;
    });      
  }

  addStory() {
    if (this.storyForm.valid) {
      const newStory: Story = this.storyForm.value;
      this.storyService.addStory(newStory).then(() => {
        this.router.navigate(['/admin/stories']);
      });
    }
  }

}

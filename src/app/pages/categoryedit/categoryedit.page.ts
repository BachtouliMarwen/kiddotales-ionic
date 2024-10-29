/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categoryedit',
  templateUrl: './categoryedit.page.html',
  styleUrls: ['./categoryedit.page.scss'],
})
export class CategoryeditPage implements OnInit {

  categoryForm!: FormGroup;
  category!: Category;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private fb: FormBuilder,    
  ) { }

  ngOnInit() {
    this.categoryForm= this.fb.group({
      name: [''],
      image: ['']
    });

    const categoryId = this.route.snapshot.paramMap.get('id');
    if (categoryId){
      this.loadCategoryData(categoryId);
    }
  }

  async loadCategoryData(categoryId: string){
    this.categoryService.getCategoryById(categoryId).subscribe(category => {
      if (category) { 
        this.category = category;
        this.categoryForm.patchValue({
          name: this.category.name,
          image: this.category.image
        });
      }
    });
  }

  async saveChanges() {
    if (this.categoryForm.valid) {
      const updatedCategory: Category = {
        ...this.category,
        ...this.categoryForm.value
      };
      await this.categoryService.updateCategory(updatedCategory.id!, updatedCategory);
      this.router.navigate(['/admin']);
    }
  }
}

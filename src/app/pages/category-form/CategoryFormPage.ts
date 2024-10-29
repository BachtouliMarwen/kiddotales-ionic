/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Category } from "src/app/models/category.model";
import { CategoryService } from "src/app/services/category.service";


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.page.html',
  styleUrls: ['./category-form.page.scss'],
})
export class CategoryFormPage implements OnInit {

  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }


  submit() {
    if (this.categoryForm.valid) {
      const category: Category = this.categoryForm.value;
      this.categoryService.addCategory(category)
        .then(() => {
          console.log('Category added successfully!');
          this.router.navigate(['/admin']);
        })
        .catch(error => {
          console.error('Error adding category: ', error);
        });
    }
  }

  ngOnInit() {
  }

}

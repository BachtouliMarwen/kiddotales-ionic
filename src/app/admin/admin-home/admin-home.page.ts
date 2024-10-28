import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  categories: Category[]=[]
  selectedCategory: Category | null = null;

  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryservice.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  editCategory(category: Category) {
    
  }

  deleteCategory(categoryId: string) {
    this.categoryservice.deleteCategory(categoryId).then(() => {
      console.log('Category deleted');
      this.selectedCategory = null;
      this.loadCategories(); 
    }).catch((error) => {
      console.error('Error deleting category: ', error);
    });
  }



}

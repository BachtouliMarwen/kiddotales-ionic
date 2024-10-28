import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryservice: CategoryService,
  ) {}

  ngOnInit(){
    this.categoryservice.getCategories().subscribe((categories) => {
      this.categories = categories;
    });  
  }

}

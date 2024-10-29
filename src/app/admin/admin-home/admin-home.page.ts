import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  constructor(private categoryservice: CategoryService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryservice.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  editCategory(categoryId: string | undefined ) {
    if (categoryId){
      this.router.navigate(['/categoryedit', categoryId]);
    }
    
  }

  async confirmDelete(categoryId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Do you really want to delete this category?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => this.deleteCategory(categoryId),
        },
      ],
    });

    await alert.present();
  }

  deleteCategory(categoryId: string) {
    this.categoryservice.deleteCategory(categoryId)
    .then(() => {
      console.log('Category deleted'); 
    }).catch((error) => {
      console.error('Error deleting category: ', error);
    });
  }
}

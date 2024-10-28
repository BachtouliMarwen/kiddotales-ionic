import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore: AngularFirestore) {}

  getCategories() {
    return this.firestore.collection<Category>('categories').valueChanges({ idField: 'id' });
  }

  addCategory(category: Category) {
    return this.firestore.collection('categories').add(category);
  }

  updateCategory(id: string, data: Partial<Category>) {
    return this.firestore.collection('categories').doc(id).update(data);
  }

  deleteCategory(id: string) {
    return this.firestore.collection('categories').doc(id).delete();
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from '../models/category.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private collectionName = 'categories';

  constructor(private firestore: AngularFirestore) {}

  getCategories() {
    return this.firestore.collection<Category>('categories').valueChanges({ idField: 'id' });
  }

  getCategoryById(id: string): Observable<Category> {
    return this.firestore.collection<Category>(this.collectionName).doc(id).valueChanges().pipe(
      map(category => {
        if (!category) {
          throw new Error(`Category with ID ${id} not found`);
        }
        return category as Category;
      })
    );
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

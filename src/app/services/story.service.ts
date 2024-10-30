import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Story } from '../models/story.model';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})

export class StoryService {

  constructor(private firestore: AngularFirestore) { }

  getStories(){
    const stories$ = this.firestore.collection<Story>('stories').valueChanges({ idField: 'id' });
    const categories$ = this.firestore.collection<Category>('categories').valueChanges({ idField: 'id' });
    
    return combineLatest([stories$, categories$]).pipe(
      map(([stories, categories]) => {
        return stories.map(story => {
          const category = categories.find(cat => cat.id === story.categoryId);
          return {
            ...story,
            categoryName: category ? category.name : 'Unknown Category'
            };
          });
        })
      );
    }
    
    getStoryById(id: string): Observable<Story> {
      return this.firestore.collection<Story>('stories').doc(id).valueChanges().pipe(
        switchMap((story: Story | undefined) => {
          if (!story) {
            throw new Error(`Story with ID ${id} not found`);
          }
          return this.firestore.collection<Category>('categories').doc(story.categoryId).valueChanges().pipe(
            map((category: Category | undefined) => {
              console.log('Fetched Story:', story);
              console.log('Fetched Category:', category);
              return{
                ...story,
                id,
                categoryName: category ? category.name : 'Unknown Category'
              }
            })
          );
        })
      );
    }

  getStoriesByCategory(categoryId: string) {
    return this.firestore
      .collection<Story>('stories', ref => ref.where('categoryId', '==', categoryId))
      .valueChanges();
  }

  addStory(story: Story){
    return this.firestore.collection('stories').add(story);
  }

  updateStory(id: string, data: Partial<Story>){
    return this.firestore.collection('stories').doc(id).update(data);
  }

  deleteStory(id:string){
    return this.firestore.collection('stories').doc(id).delete();
  }

}

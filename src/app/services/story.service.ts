import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})

export class StoryService {

  constructor(private firestore: AngularFirestore) { }

  getStories(){
    return this.firestore.collection<Story>('stories').valueChanges({ idField: 'id'});
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

  getStoriesByCategory(categoryId: string) {
    return this.firestore
      .collection<Story>('stories', ref => ref.where('categoryId', '==', categoryId))
      .valueChanges();
  }
}

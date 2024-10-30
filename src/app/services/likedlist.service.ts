import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LikedList } from '../models/likedlist.model';
import { from, Observable, of, switchMap, take } from 'rxjs';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class LikedlistService {

  constructor(private firestore: AngularFirestore) {

  }

  getLikedList(userId: string): Observable<LikedList> {
    return this.firestore.collection<LikedList>('likedLists').doc(userId).valueChanges().pipe(
      switchMap(likedList => {
        return of(likedList ?? new LikedList(userId, []));
      })
    );
  }

  toggleLike(userId: string, storyId: string): Observable<void> {
    return this.getLikedList(userId).pipe(
      take(1), // Ensure we only take the first emitted value
      switchMap(likedList => {
        const likedStoryIds = likedList?.likedStoryIds || [];
        const index = likedStoryIds.indexOf(storyId);
  
        if (index === -1) {
          likedStoryIds.push(storyId);
        } else {
          likedStoryIds.splice(index, 1);
        }
  
        // Wrap the Firestore set call in `from` to convert the promise to an observable
        return from(this.firestore.collection('likedLists').doc(userId).set({
          likedStoryIds: likedStoryIds
        }));
      })
    );
  }
  
  getLikedStories(userId: string): Observable<Story[]> {
    return this.getLikedList(userId).pipe(
      switchMap(likedList => {
        const likedStoryIds = likedList?.likedStoryIds || [];
        return this.firestore.collection<Story>('stories', ref =>
          ref.where('id', 'in', likedStoryIds)
        ).valueChanges();
      })
    );
  }
}

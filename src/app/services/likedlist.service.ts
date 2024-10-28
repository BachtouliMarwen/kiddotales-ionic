import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LikedList } from '../models/likedlist.model';

@Injectable({
  providedIn: 'root'
})
export class LikedlistService {

  private likedListCollection = this.firestore.collection<LikedList>('likedLists');

  constructor(private firestore: AngularFirestore) {
    this.likedListCollection = this.firestore.collection<LikedList>('likedLists');
   }
  
  getLikedListByUserId(userId: string) {
    return this.likedListCollection
      .doc<LikedList>(userId) 
      .valueChanges();
  }

  
}

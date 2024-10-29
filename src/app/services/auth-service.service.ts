import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User, UserRole } from '../models/user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public ngFireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }
  
  async registerUser(firstName: string, lastName: string, email: string, password: string, phone: string, gender: string){
    const userCredential = await this.ngFireAuth.createUserWithEmailAndPassword(email,password)
    const userId = userCredential.user?.uid;
    const userData: User = {
      id: userId!,
      firstName,
      lastName,
      email,
      phone,
      gender,
      role: UserRole.Reader
    };

    return this.firestore.collection('users').doc(userId).set(userData);
  }

  async loginUser(email: string, password: string){
    const userCredential = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
    const userId = userCredential.user?.uid;

    const userDoc = await this.firestore.collection('users').doc(userId).ref.get();
    const userData = userDoc.data() as User;
    
    return userData;    
  }

  isAuthenticated(): Observable<boolean> {
    return this.ngFireAuth.authState.pipe (
      map(user => !!user)
    );
  }

  logout() {
    return this.ngFireAuth.signOut();
  }
  
}

import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public firestore: Firestore
  ) { }

  async getEvent(eventDay: number) {
    return (
      await getDocs(query(collection(this.firestore, eventDay.toString())))
    ).docs.map(event => event.data());
  }
}

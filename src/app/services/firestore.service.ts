import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, Firestore, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore,
  ) { }

  getEvent(eventDate: Date) {
    const date = this.dateToString(eventDate)
    return collectionData(collection(this.firestore, date))
  }

  dateToString(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? (date.getMonth() + 1).toString().padStart(2, '0'): (date.getMonth() + 1).toString();
    const day = date.getDate() < 10 ? date.getDate().toString().padStart(2, '0'): date.getDate().toString();
    return `${year}/${month}/${day}`;
  }
}

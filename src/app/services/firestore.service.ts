import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public firestore: Firestore
  ) { }

  async getEvent(eventDay: Date) {
    return (
      await getDocs(query(collection(this.firestore, eventDay.toString())))
    ).docs.map(event => event.data());
  }

  getYear() {
    // Get current year's collection
  }

  getMonth() {
    // Get current month's collection
  }

  getDay() {
    // Get current day's collection
  }
}

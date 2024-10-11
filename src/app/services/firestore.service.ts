import { Injectable } from "@angular/core";
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  getDocs,
  query,
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  constructor(
    private firestore: Firestore,
  ) {}

  getEvent(eventDate: Date) {
    const date = this.dateToString(eventDate);
    return collectionData(collection(this.firestore, date));
  }

  dateToString(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    console.log(`${year}/${month}/${day}`);
    return `${year}/${month}/${day}`;
  }
}

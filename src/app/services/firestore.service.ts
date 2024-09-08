import { Injectable } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { collection, CollectionReference, Firestore, getDocs, query } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public firestore: Firestore
  ) { }

  getEvent(eventDate: Date) {
    const yearCollection = this.getYearCollection(eventDate);
    const monthCollection = this.getMonthCollection(yearCollection, eventDate);
    const dayCollection = this.getDayCollection(monthCollection, eventDate);
    console.log(dayCollection);
    // Creo que para pedir cosas anidadas hay que pedir con la "ruta" rollo: "2024/9/14"
    // siendo cada numero el id de la colección
    from(getDocs(query(dayCollection))
    ).subscribe(dayEvents => console.log(dayEvents));
  }

  getYearCollection(eventDate: Date) {
    return collection(this.firestore, eventDate.getFullYear().toString())
  }

  getMonthCollection(yearCollection: CollectionReference, eventDate: Date) {
    return collection(yearCollection, (eventDate.getMonth() + 1).toString())
  }

  getDayCollection(monthCollection: CollectionReference, eventDate: Date) {
    return collection(monthCollection, eventDate.getDate().toString())
  }
}

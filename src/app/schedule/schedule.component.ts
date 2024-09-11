import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Ekintza } from '@components/services/event.interface';
import { FirestoreService } from '@components/services/firestore.service';

@Component({
  standalone: true,
  selector: 'app-schedule',
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnChanges {
  @Input() selectedDate: Date = new Date();
  events: Ekintza[] = [];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.getEvents();
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.firestoreService.getEvent(this.selectedDate).subscribe(
      (events: any) => {
        this.events = events.map((event: any) => ({
          ...event,
          date: event.date.toDate(),
        })).sort((a: any, b: any) => a.date - b.date);
    });
  }
}

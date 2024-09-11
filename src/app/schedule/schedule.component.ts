import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Ekintza } from '@components/services/event.interface';
import { FirestoreService } from '@components/services/firestore.service';

@Component({
  standalone: true,
  selector: 'app-schedule',
  imports: [CommonModule],
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
      this.firestoreService.getEvent(this.selectedDate).subscribe(
        (events: any) => {
          console.log(events);
          this.events = events;
        });
  }

  ngOnInit() {
    this.firestoreService.getEvent(this.selectedDate).subscribe(
      (events: any) => {
        console.log(events);
        this.events = events;
    });  
  }
}

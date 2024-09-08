import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ekintza } from '@components/services/event.interface';
import { FirestoreService } from '@components/services/firestore.service';

@Component({
  standalone: true,
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  @Input() selectedDate: Date | null = new Date(2024, 9, 14);
  events: Ekintza[] = [];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    if (this.selectedDate) {
      this.firestoreService.getEvent(this.selectedDate).subscribe(
        (dayEvents: any) => {
        console.log({dayEvents})
        this.events = dayEvents;
      });;
    }
  }
}

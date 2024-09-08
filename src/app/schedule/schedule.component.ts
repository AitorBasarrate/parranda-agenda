import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FirestoreService } from '@components/services/firestore.service';

@Component({
  standalone: true,
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  @Input() selectedDate: Date | null = new Date();
  @Input() activities = [];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    console.log(this.selectedDate);
    if (this.selectedDate) {
      this.firestoreService.getEvent(this.selectedDate);
    }
  }
}

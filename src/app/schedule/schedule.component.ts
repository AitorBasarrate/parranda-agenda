import { Component, Input } from '@angular/core';
import { FirestoreService } from '@components/services/firestore.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  @Input() eventDay = new Date().getDate();

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    console.log(this.eventDay);
    this.firestoreService.getEvent(this.eventDay);
  }
}

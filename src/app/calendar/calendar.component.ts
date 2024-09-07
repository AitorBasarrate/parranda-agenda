import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    ScheduleComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  currentMonth: number = 1;
  currentYear: number = 1;
  calendarDays: any[] = [];
  selectedDate: Date | null = null;
  activities: { [key: string]: string[] } = {
    '2023-10-01': ['Activity 1', 'Activity 2'],
    '2023-10-02': ['Activity 3', 'Activity 4'],
    // Add more activities for different dates
  };

  ngOnInit() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDays = [];
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
    const startDay = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
    const endDay = lastDayOfMonth.getDate();

    for (let i = 0; i < startDay; i++) {
      this.calendarDays.push({ date: null });
    }

    for (let i = 1; i <= endDay; i++) {
      this.calendarDays.push({ date: i });
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  selectDay(day: any) {
    if (day.date) {
      this.selectedDate = new Date(this.currentYear, this.currentMonth, day.date);
    }
  }

  getActivitiesForSelectedDate(): string[] {
    if (!this.selectedDate) {
      return [];
    }
    const dateKey = this.selectedDate.toISOString().split('T')[0];
    return this.activities[dateKey] || [];
  }

  isSelected(day: any): boolean {
    if (!this.selectedDate || !day.date) {
      return false;
    }
    return this.selectedDate.getDate() === day.date &&
           this.selectedDate.getMonth() === this.currentMonth &&
           this.selectedDate.getFullYear() === this.currentYear;
  }
}
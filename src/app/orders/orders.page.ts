import { Component, OnInit  ,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  weekDays: Date[] = [];
    selectedDate: Date = new Date();
    dateValue: any;
    constructor(private datePipe: DatePipe,) { 
      this.initializeWeek();
    }
  ngOnInit() {
  }
  initializeWeek() {
    const currentDate = new Date();
    for (let i = 30; i >= 0; i--) {
      const day = new Date(currentDate);
      day.setDate(currentDate.getDate() - i);
      this.weekDays.push(day);
    }
    this.selectedDate = currentDate;
  }
  selectDate(date: Date) {
    console.log("inside selected date")
    this.selectedDate = date;
    this.dateValue = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd')

  }
  ionViewWillEnter() {
    console.log('dateValue', this.dateValue)
    if (this.dateValue) {
    } else {
      this.selectedDate = new Date();
      this.dateValue = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
  
    }
  
  }
  isDateSelected(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd') === this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
  }

}

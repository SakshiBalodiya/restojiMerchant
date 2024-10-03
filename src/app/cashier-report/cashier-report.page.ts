import { Component, OnInit,  AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as HighCharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
import Cylinder from 'highcharts/modules/cylinder';
@Component({
  selector: 'app-cashier-report',
  templateUrl: './cashier-report.page.html',
  styleUrls: ['./cashier-report.page.scss'],
})
export class CashierReportPage implements OnInit {
  @ViewChild('cashierChart', { static: false }) cashierChart: ElementRef | undefined;
  weekDays: Date[] = [];
    selectedDate: Date = new Date();;
    dateValue: any;
    constructor(private datePipe: DatePipe,) { 
      this.initializeWeek();
    }

    ngOnInit() {
    }
    ngAfterViewInit() {
      if (this.cashierChart) {
        this.createBarChartSales();
      } else {
        console.error('Revenue chart element not found.');
      }
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


    createBarChartSales() {
      const cashierLabel = ['Versha', 'Sagar', 'Ashok', 'Yogita', 'Rohan' ];
      const salesData = [29.9,  106.4, 144.0, 71.5, 106.4];
    
      if (this.cashierChart) {
        HighCharts.chart(this.cashierChart.nativeElement, {
          colors: ['#F4A79D', '#F68D2B', '#344BFD', '#49A677', '#FA898B'],
          chart: {
            type: 'column',
          },
          title: {
            text: 'Cashier Sales',
            align: 'center',
            style: {
              fontWeight: '400',
              color: '#000000',
            },
          },
          credits: {
            enabled: false
          },
         
          xAxis: {
            categories: cashierLabel,
            // crosshair: true,
            crosshair: {
                  width: 6,
                  color: '#c72c3c',                
                },
            labels: {
                  style: {
                    color: '#000000',
                  },
                }
          },
          yAxis: {
            min: 0,
            title: {
              text: ''
            }
          },
          tooltip: {
            valueSuffix: ''
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [
            {
              type: 'column',
                name: '',
                data: salesData,
                color: '#FFC6C6',
            }
          ]
        });
      }
    }

}

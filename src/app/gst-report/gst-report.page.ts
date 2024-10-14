import { Component, OnInit  ,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as HighCharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
import Cylinder from 'highcharts/modules/cylinder';
@Component({
  selector: 'app-gst-report',
  templateUrl: './gst-report.page.html',
  styleUrls: ['./gst-report.page.scss'],
})
export class GstReportPage implements OnInit {

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
    this.createGSTChart();
  }
  isDateSelected(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd') === this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
  }


  createGSTChart() {
    const totalSales = 5710;
    const options: Highcharts.Options = {
      colors: ['#F4A79D', '#344BFD'],
      chart: {
        type: 'pie',
       
       
      },
      title: {
        text: '',
        align: 'left',
        verticalAlign: 'top',

      },
      credits: {
        enabled: false
      },
      tooltip: {
        valueSuffix: '%'
      },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              useHTML: true,
              distance: -2  ,
              formatter: function() {
                const percentage = this.point?.percentage?.toFixed(1) ?? '0';
                return `<div style="background-color: #ECEAF8; border-radius: 50%; padding: 18px 8px; text-align: center; display: inline-block; min-width: 40px;"><span style="color: #000;">${percentage}%</span></div>`;
              },
            },
            showInLegend: true,

            innerSize: '60%',
            size: '80%',
        
          },
          series: {
            dataLabels: {
                align: 'center',
            }
          } 
        },
      legend: {
        layout: 'vertical',
        verticalAlign: 'bottom',
        align: 'left',

        itemStyle: {
          fontSize: '14px',
          color: '',
        },
        symbolPadding: 4,
        itemMarginTop: 5,
        itemMarginBottom: 5,
      },
      series: [{
        
        type: 'pie',
        allowPointSelect: true,
        name: '',
        showInLegend: false,
        data: [
          {
          name: 'GST on Sales',
          y: 20
          }, 
          {
            name: 'TotalSales',
            y: 80
          },
        ]
      },
    ],
    
    };
  
    HighCharts.chart('gstChart', options);
  }
}

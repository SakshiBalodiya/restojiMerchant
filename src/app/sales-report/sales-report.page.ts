  import { Component, OnInit } from '@angular/core';
  import { DatePipe } from '@angular/common';
  import * as HighCharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
import Cylinder from 'highcharts/modules/cylinder';
  @Component({
    selector: 'app-sales-report',
    templateUrl: './sales-report.page.html',
    styleUrls: ['./sales-report.page.scss'],
  })
  export class SalesReportPage implements OnInit {
    weekDays: Date[] = [];
    selectedDate: Date = new Date();;
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
      this.createSalesChart();
    }
    isDateSelected(date: Date) {
      return this.datePipe.transform(date, 'yyyy-MM-dd') === this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
    }


    
  createSalesChart() {
    const totalSales = 5710;
    const options: Highcharts.Options = {
      colors: ['#F4A79D', '#F68D2B', '#344BFD', '#49A677', '#FA898B'],
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
            enabled: false,
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
            name: 'Baverages',
            y: 50
          },
          {
          name: 'Bakery',
          y: 50
          }, 
          {
            name: 'Sea Food',
            y: 50
          }, 
          {
            name: 'Burger',
            y: 50
          },
          {
            name: 'Pizza',
            y: 50
          }
        ]
      },
    ],
    
    };
  
    HighCharts.chart('salesChart', options);
  }
  }

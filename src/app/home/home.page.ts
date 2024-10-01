import { Component, OnInit,  AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as HighCharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
import Cylinder from 'highcharts/modules/cylinder';
Highcharts3d(HighCharts);
Cylinder(HighCharts);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('salesChart', { static: false }) salesChart: ElementRef | undefined;
  contentShown = false;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    if (this.salesChart) {
      this.createBarChartSales();
    } else {
      console.error('Revenue chart element not found.');
    }
  }
  createBarChartSales() {
    const salesLabel = ['19', '20', '21', '22', '23', '24', '25' ];
    const salesData = [29.9,  106.4, 144.0, 71.5, 106.4, 129.2, 144.0,];
  
    if (this.salesChart) {
      HighCharts.chart(this.salesChart.nativeElement, {
        chart: {
          type: 'column',
        },
        title: {
          text: '',
          align: 'left',
          style: {
            fontWeight: 'bold',
            color: '#000000',
          },
        },
        credits: {
          enabled: false
        },
        subtitle: {
          text: '',
          align: 'left',
          style: {
            fontWeight: 'bold',
            color: '#c72c3c',
            fontSize: '15px',
          },
        },
        xAxis: {
          categories: salesLabel,
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
        // xAxis: {
        //   crosshair: {
        //     width: 1,
        //     color: '#c72c3c',
        //     zIndex: 4,
            
        //   },
        //   categories: revenueLabel,
        //   labels: {
        //     style: {
        //       color: '#000000',
        //     },
        //   },
        // },
        // yAxis: [
        //   { // Primary yAxis
        //     title: {
        //       text: '',
        //       style: {
        //         color: '#c72c3c',
        //       },
        //     },
        //     labels: {
        //       style: {
        //         color: '#c72c3c',
        //       },
        //     },

        //   },
        //   { // Secondary yAxis
        //     title: {
        //       text: '',
        //       style: {
        //         color: '#000000',
        //       },
        //     },
        //     labels: {
        //       style: {
        //         color: '#000000',
        //       },
        //     },
        //     opposite: true,
        //   }
        // ],
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
        // series: [{
        //   type: 'column',
        //   name: 'Revenue',
        //   data: revenueData,
        //   color: '#c72c3c',
        // }],
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

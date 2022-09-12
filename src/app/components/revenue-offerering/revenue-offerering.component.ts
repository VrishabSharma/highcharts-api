import { Component } from '@angular/core';
import Highcharts = require('highcharts');

@Component({
  selector: 'app-revenue-offerering',
  templateUrl: './revenue-offerering.component.html',
  styleUrls: ['./revenue-offerering.component.css'],
})
export class RevenueOffereringComponent {
  Highcharts = Highcharts;
  linechart: any = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Revenue (6 months) per offering',
    },
    xAxis: {
      categories: [
        'Business Premier 25 Gb',
        'Business Premier 40 Gb',
        'Business Premier 60 Gb',
        'Business Premier 25 gb',
        'Business Premier 40 gb',
        'Business Premier 25 gb',
        'Business Premier 40 gb',
      ],
      crosshair: true,
    },
    colors: ['#ff8ab5', '#ffd1d6', '#d68afd', '#aef9d2', '#66dfff', '#ffe289'],
    yAxis: {
      title: {
        useHTML: true,
        text: 'USD (100K)',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Sept 2021',
        data: [47, 38, 62, 25, 38, 73],
      },
      {
        name: 'Oct 2021',
        data: [42, 56, 78, 43, 72, 21],
      },
      {
        name: 'Nov 2021',
        data: [22, 33, 72, 45, 68, 68],
      },
      {
        name: 'Dec 2021',
        data: [75, 49, 60, 74, 46, 47],
      },
      {
        name: 'Jan 2022',
        data: [56, 46, 27, 72, 36, 27],
      },
      {
        name: 'Feb 2022',
        data: [75, 33, 39, 73, 75, 25],
      },
    ],
  };
}

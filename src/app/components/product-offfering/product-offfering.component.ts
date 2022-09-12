import { Component } from '@angular/core';
import Highcharts = require('highcharts');

@Component({
  selector: 'app-product-offfering',
  templateUrl: './product-offfering.component.html',
  styleUrls: ['./product-offfering.component.css'],
})
export class ProductOffferingComponent {
  Highcharts = Highcharts;
  linechart: any = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'UEFA CL top scorers by season',
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
    },

    colors: ['#ffe289', '#aff9d3', '#ff8ab5', '#66dfff'].reverse(),
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Percent',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'SOHO',
        data: [15, 11, 20, 35, 12, 16],
      },
      {
        name: 'ME',
        data: [28, 39, 40, 15, 38, 34],
      },
      {
        name: 'Large Enterprises',
        data: [27, 15, 15, 17, 31, 13],
      },
      {
        name: 'Wholesale',
        data: [30, 35, 25, 33, 19, 37],
      },
    ].reverse(),
  };
}

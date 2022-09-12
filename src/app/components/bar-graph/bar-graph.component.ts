import Highcharts = require('highcharts');
import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent {
  Highcharts = Highcharts;
  linechart: any = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Active Customers For Top 5 Categories',
    },
    xAxis: {
      type: 'category',
      gridLineWidth: 1,
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      gridLineWidth: 1,
      title: {
        text: 'Active Customers (thousands)',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: '<b>{point.y:.1f}',
    },
    colors: ['#00FFFF'],
    series: [
      {
        name: 'Population',
        data: [
          ['Business Premier 20 Gb', 22.3],
          ['Business Premier 40 Gb', 24],
          ['Business Premier 60 Gb', 32],
          ['Business Premier 20 gb', 25],
          ['Business Premier 40 gb', 27],
        ],
      },
    ],
  };
}

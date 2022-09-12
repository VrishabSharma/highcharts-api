import { Component } from '@angular/core';

import Highcharts = require('highcharts');

@Component({
  selector: 'app-profitable-offer',
  templateUrl: './profitable-offer.component.html',
  styleUrls: ['./profitable-offer.component.css'],
})
export class ProfitableOfferComponent {
  Highcharts = Highcharts;
  linechart: any = {
    chart: {
      type: 'column',
      margin: [50, 50, 100, 80],
    },
    plotOptions: {
      column: {
        colorByPoint: true,
      },
    },
    colors: ['#ff8ab5', '#ffd1d6', '#d68afd', '#aff9d3', '#66dfff'],
    title: {
      text: "World's largest cities per 2008",
    },
    xAxis: {
      gridLineWidth: 1,
      categories: [
        'Business Premier 20 Gb',
        'Business Premier 40 Gb',
        'Business Premier 60 Gb',
        'Business Premier 20 gb',
        'Business Premier 40 gb',
      ],
      labels: {
        rotation: -45,
        align: 'right',
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
        text: 'Population (millions)',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' +
          this.x +
          '</b><br/>' +
          'Population in 2008: ' +
          Highcharts.numberFormat(this.y, 1) +
          ' millions'
        );
      },
    },
    series: [
      {
        name: 'Population',
        data: [47, 14, 20, 3, 11],
      },
    ],
  };
}

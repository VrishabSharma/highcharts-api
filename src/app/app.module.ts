import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "line-chart"
  },
  {
    path: "line-chart",
    component: LineChartComponent
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HighchartsChartModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LineChartComponent
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}

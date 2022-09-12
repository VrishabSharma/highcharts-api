import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { RevenueOffereringComponent } from './components/revenue-offerering/revenue-offerering.component';
import { ProfitableOfferComponent } from './components/profitable-offer/profitable-offer.component';
import { ProductOffferingComponent } from './components/product-offfering/product-offfering.component';

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
  {
    path: "bar-graph",
    component: BarGraphComponent
  },
  {
    path: "product-offfering",
    component: ProductOffferingComponent
  },
  {
    path: "profitable-offer",
    component: ProfitableOfferComponent
  },
  {
    path: "revenue-offerering",
    component: RevenueOffereringComponent
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
    LineChartComponent,
    BarGraphComponent,
    ProductOffferingComponent,
    ProfitableOfferComponent,
    RevenueOffereringComponent
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}

import { TuiButtonModule } from '@taiga-ui/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CountUpModule,
    FontAwesomeModule,
    TuiIslandModule,
    TuiButtonModule,
    NgxChartsModule
  ]
})
export class DashboardModule { }

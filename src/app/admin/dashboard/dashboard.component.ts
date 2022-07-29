import { faCreditCard, faCubes, faPollH } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

interface PiechartData {
  name: string;
  value: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  faCubes = faCubes;
  faCreditCard = faCreditCard;
  faPollH = faPollH;

  pieChartData: PiechartData[] = [
    {
      name: 'Agree',
      value: 90
    },
    {
      name: 'Disagree',
      value: 75
    },
    {
      name: 'Not Responded',
      value: 50
    }
  ];

  chartView: [number, number] = [0, 0];

  ngOnInit(): void {
  }

  onResize(event: Event) {
    this.chartView = [(event.target as Window).innerWidth / 1.35, 400];
  }

}

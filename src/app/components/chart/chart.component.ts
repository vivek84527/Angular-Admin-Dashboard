import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var myChart = new Chart("myChart1", {
      type: 'bar',
      data: {
        labels: ['furniture ', 'storage', 'beds&mattresses', 'dining&Bar', 'wall Accents', 'decor ','lighting','furnishing','carpets','Garden and Outdoor'],
        datasets: [{
          label: 'No of Sales',
          data: [400, 300, 200, 520, 500, 400,320,250,258,147],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });



  }
  show() {
    var myChart = new Chart("myChart1", {
      type: 'bar',
      data: {
        labels: ['furniture ', 'storage', 'beds&mattresses', 'dining&Bar', 'wall Accents', 'decor ','lighting','furnishing','carpets','Garden and Outdoor'],
        datasets: [{
          label: 'No of Sales',
          data: [400, 300, 200, 520, 500, 400,320,250,258,147],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });



  }


}


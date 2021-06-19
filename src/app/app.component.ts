import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Datapoint {
  name: String;
  value: number;
}

export interface GraphData {
  name: String;
  series: Datapoint[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];

  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  colorScheme2 = {
    domain: ['#01205c', '#013089', '#0240b7', '#0250e5', '#3573ea	', '#6796ef	']
  };
  // data goes here
  public single: Datapoint[] = [
    {
      name: 'China',
      value: 2243772
    },
    {
      name: 'USA',
      value: 1126000
    },
    {
      name: 'Norway',
      value: 296215
    },
    {
      name: 'Japan',
      value: 257363
    },
    {
      name: 'Germany',
      value: 196750
    },
    {
      name: 'France',
      value: 204617
    }
  ];

  data = [
    {
      name: 'green',
      series: [
        {
          name: 'Aug',
          value: 14
        },
        {
          name: 'Sep',
          value: 35
        },
        {
          name: 'Oct',
          value: 4
        },
        {
          name: 'Nov',
          value: 17
        },
        {
          name: 'Dec',
          value: 14
        },
        {
          name: 'Jan',
          value: 35
        }
      ]
    },

    {
      name: 'yellow',
      series: [
        {
          name: 'Aug',
          value: 364
        },
        {
          name: 'Sep',
          value: 412
        },
        {
          name: 'Oct',
          value: 437
        },
        {
          name: 'Nov',
          value: 437
        },
        {
          name: 'Dec',
          value: 364
        },
        {
          name: 'Jan',
          value: 412
        }
      ]
    },
    {
      name: 'red',
      series: [
        {
          name: 'Aug',
          value: 168
        },
        {
          name: 'Sep',
          value: 343
        },
        {
          name: 'Oct',
          value: 512
        },
        {
          name: 'Nov',
          value: 291
        },
        {
          name: 'Dec',
          value: 168
        },
        {
          name: 'Jan',
          value: 343
        }
      ]
    }
  ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get('/assets/data.csv', { responseType: 'text' })
      .pipe(map(res => res))
      .subscribe(data => {
        console.log(data);
      });
  }
}

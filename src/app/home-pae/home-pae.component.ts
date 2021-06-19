import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';

export interface Datapoint {
  name: String;
  value: number;
}

export interface GraphData {
  name: String;
  series: Datapoint[];
}
@Component({
  selector: 'app-home-pae',
  templateUrl: './home-pae.component.html',
  styleUrls: ['./home-pae.component.css']
})
export class HomePaeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'name',
    'liquidity',
    'vol7',
    'vol24',
    'swapcnt',
    'fee24h'
  ];

  tableDataSource = [];
  ecosystemData: any;

  liquidity30days = [];
  volume30days = [];

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
    }
  ];

  constructor(
    private httpClient: HttpClient,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getEcosystemData().subscribe(
      (val: any) => {
        //console.log(val);

        this.ecosystemData = val.data.items[0];
        let liqdata = [{ name: 'Liquidity', series: [] }];
        let voldata = [{ name: 'Liquidity', series: [] }];
        let liqres = this.ecosystemData.liquidity_chart_30d;
        liqres.forEach(e => {
          liqdata[0].series.push({
            name: e.dt.slice(0, 10),
            value: e.liquidity_quote
          });
        });

        let volres = this.ecosystemData.volume_chart_30d;
        volres.forEach(e => {
          voldata[0].series.push({
            name: e.dt.slice(0, 10),
            value: e.volume_quote
          });
        });

        this.liquidity30days = liqdata;
        this.volume30days = voldata;
      },
      err => {
        console.log(err);
      }
    );

    this.dataService.getPoolData().subscribe(
      (val: any) => {
        console.log(val);
        this.tableDataSource = val.data.items;
      },
      err => {
        console.log(err);
      }
    );
  }
}

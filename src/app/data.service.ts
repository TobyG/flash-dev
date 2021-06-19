import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dexname = 'spiritswap';
  chain_id = 250;
  static readonly BASE_URL = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  getEcosystemData() {
    return this.http.get(
      DataService.BASE_URL +
        this.chain_id +
        '/uniswaplikev2service/' +
        this.dexname +
        '/ecosystem/?'
    );
  }

  getPoolData() {
    return this.http.get(
      DataService.BASE_URL +
        this.chain_id +
        '/uniswaplikev2service/' +
        this.dexname +
        '/pools/?'
    );
  }
}

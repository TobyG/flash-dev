import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiToken = environment.apiKey;

    const headers = new HttpHeaders({
      //'API-KEY': apiToken,
      Authorization: 'Basic ' + btoa(apiToken + ':xxx')
    });
    const cloned = req.clone({ headers });
    return next.handle(cloned);
  }
}

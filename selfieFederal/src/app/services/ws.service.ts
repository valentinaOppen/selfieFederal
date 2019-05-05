import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
// import { filter, map } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class WsService {

  constructor(private http: HttpService) { }

  getSelfies():any {
    return this.http.get('/selfies');
  }

  setSelfie(selfie) {
    return this.http.post('/selfies', selfie);
  }
}

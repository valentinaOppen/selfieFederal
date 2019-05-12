import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
// import { filter, map } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class WsService {
  SRC = 'https://selfiefederal.com/api/';// 
  // SRC = 'http://127.0.0.1:8080/selfieFederal/';

  constructor(private http: HttpService) { }

  getSelfies():any {
    return this.http.get('/selfies');
  }

  getSelfies2():any{
    return this.http.get('/selfies_2')
  }

  setSelfie(selfie) {
    return this.http.post('/selfies', selfie);
  }

  searchSelfies(sitio) {
    return this.http.get(`/selfies/search/${sitio}`);
  }
}

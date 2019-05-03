import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	URL = "http://127.0.0.1:8080/selfieFederal";

	constructor(private http: HttpClient) { }

	get(url) {
		return this.http.get(this._getUrl(url));
	}


	private _getUrl(url) {
		url = url[0] === '/'?url:`/${url}`;
		return `${this.URL}${url}`;
	}
}

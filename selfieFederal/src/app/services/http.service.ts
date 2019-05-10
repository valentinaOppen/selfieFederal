import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	URL = 'https://selfiefederal.com/api/';// "http://127.0.0.1:8080/selfieFederal";
	httpOptions = {
		headers: new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
			// 'Authorization': 'authkey',
			// 'userid': '1'
		})
	};
	constructor(private http: HttpClient) { }

	get(url) {
		return this.http.get(this._getUrl(url));
	}

	post(url, o) {
		return this.http.post(this._getUrl(url), o);
	}

	private _getUrl(url) {
		url = url[0] === '/'?url:`/${url}`;
		return `${this.URL}${url}`;
	}
}

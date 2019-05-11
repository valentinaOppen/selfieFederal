import { Injectable } from '@angular/core';
// import { timingSafeEqual } from 'crypto';
function getWindow(): any {
  return window;
}
function _getMedia() {
  navigator['getMedia'] = (navigator.getUserMedia ||
    navigator['webkitGetUserMedia'] ||
    navigator['mozGetUserMedia']);
}
function _getNavigator() {
  return navigator;
}
@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private _win;
  latitude;
  longitude;
  private coords = false;
  constructor() {
    
    this._win = getWindow();
    this._win.navigator.geolocation.getCurrentPosition(data => {
      
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
      this.coords = true;
    }, err => {
      
      this.coords = false;
      this.latitude = null;
      this.longitude = null;
    });


  }
  coordsExists() {
    return this.coords ;
  }
  get nativeWindow(): any {
    return this._win;
  }

  getNavigator() {
    _getMedia();
    return _getNavigator();
  }
}

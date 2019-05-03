import { Component, OnInit } from '@angular/core';
import { Icoords, Imarker, ILatLng } from '../imaps';


@Component({
  selector: 'map-markers',
  templateUrl: './map-markers.component.html',
  styleUrls: ['./map-markers.component.css']
})
export class MapMarkersComponent implements OnInit {
  title: string = 'Massa Maps';
  lat: number = 51.678418;
  lng: number = 7.809007;
  markers: Imarker[];
  constructor() { }

  ngOnInit() {
    this.markers = [];
  }

  handlerMapDblClick(e: ILatLng) {
    console.log(e)
    this.markers.push({
      lat: e.lat,
      lng: e.lng,
      draggable: true
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Icoords, Imarker, ILatLng } from '../imaps';
import { WsService } from '../../../services/ws.service'; 


@Component({
  selector: 'map-markers',
  templateUrl: './map-markers.component.html',
  styleUrls: ['./map-markers.component.css']
})
export class MapMarkersComponent implements OnInit {
  // title: string = 'Massa Maps';
  // lat: number = 51.678418;
  // lng: number = 7.809007;
  markers: Array<any>; //Imarker[];
  latLng = {};
  constructor(private ws: WsService) { }

  ngOnInit() {
    this.ws.getSelfies()
      .subscribe(data => {
        console.log(data);
        if (data[0]) {
          this.latLng = {
            lat: data[0].lat,
            lng: data[0].lng
          } 
        }
        this.markers = data;
      })
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

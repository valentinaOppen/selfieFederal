import { Component, OnInit } from '@angular/core';
import { Icoords, Imarker, IPersona } from './imaps';
import {WsService } from '../../services/ws.service'; 

@Component({
  selector: 'massa-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  latLng = {
    lat: -35.6501339,
    lng: -60.7093851
  }
  markers: any; //Imarker[];
  persona = {
    img: null,
    nombre: ''
  };
  constructor(private ws: WsService) { }

  ngOnInit() {
    this.ws.getSelfies()
      .subscribe(data => {
        console.log(data);
        this.markers = data;
      });
  }

  handlerClick(e: Imarker) {
    console.log(e);
    
    e.persona = this.persona;
    this.markers.push(e);
  }
}

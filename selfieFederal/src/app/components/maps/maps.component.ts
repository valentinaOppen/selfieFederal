import { Component, OnInit } from '@angular/core';
import { Icoords, Imarker, IPersona } from './imaps';

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
  markers: Imarker[];
  persona = {
    img: null,
    nombre: ''
  };
  constructor() { }

  ngOnInit() {
    this.markers = [
      {
        lat: -35.6501339,
        lng: -60.7093851,
        label: 'Que label',
        draggable: true,
        persona: {
          img: null,
          nombre: 'Nombre de la Persona'
        }
      },
      {
        lat: -35.7504339,
        lng: -60.7095851,
        label: 'Que label',
        draggable: true,
        persona: {
          img: null,
          nombre: 'Votante de Massa 1'
        }
      }
    ];
  }

  handlerClick(e: Imarker) {
    console.log(e);
    
    e.persona = this.persona;
    this.markers.push(e);
  }
}

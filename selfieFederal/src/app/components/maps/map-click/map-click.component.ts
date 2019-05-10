import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { WsService } from '../../../services/ws.service'; 
import { Icoords, Imarker, IPersona } from '../imaps';

@Component({
  selector: 'map-click',
  templateUrl: './map-click.component.html',
  styleUrls: ['./map-click.component.css']
})
export class MapClickComponent implements OnInit {
  @Input() autocomplete = false;
  @Output() mapClick = new EventEmitter<any>();
  markers: Imarker[];
  persona = {
    // img: null,
    // nombre: '',
    // draggable: true
  };
  latLng;
  point: Icoords;
  
  constructor(private ws: WsService) { }

  ngOnInit() {
  }

  selected(e) {
    // console.log(e)
    this.latLng = e;
    this.point = {
      coords: e
    }
    // console.log(this.point);
  }
  handlerClick(e: Imarker) {
    // console.log(e);
    this.mapClick.emit(e)
    this.markers = [e];
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WsService } from '../../../services/ws.service'; 
import { Icoords, Imarker, IPersona } from '../imaps';

@Component({
  selector: 'map-click',
  templateUrl: './map-click.component.html',
  styleUrls: ['./map-click.component.css']
})
export class MapClickComponent implements OnInit {
  @Output() mapClick = new EventEmitter<any>();
  markers: Imarker[];
  persona = {
    // img: null,
    // nombre: '',
    // draggable: true
  };
  constructor(private ws: WsService) { }

  ngOnInit() {
  }

  handlerClick(e: Imarker) {
    // console.log(e);
    this.mapClick.emit(e)
    this.markers = [e];
  }
}

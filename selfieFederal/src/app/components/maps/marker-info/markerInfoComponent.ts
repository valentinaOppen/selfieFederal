import { Component, OnInit, Input } from '@angular/core';
import { WsService } from '../../../services/ws.service';

@Component({
  selector: 'app-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.css']
})
export class MarkerInfoComponent implements OnInit {
  public _markerItem;
  @Input() 
  set markerItem(value) {
    
    this._markerItem = value.persona;
    this._markerItem.img = this._markerItem.img ? this._markerItem.img : this._personaDefault.img;
    this._markerItem.nombre = this._markerItem.nombre ? this._markerItem.nombre : this._personaDefault.nombre;
  } 
  get markerItem() {
    return this._markerItem;
  }
  public _personaDefault = {
    img: './images/img_avatar3.png',
    nombre: 'Jon Doe'
  };

  SRC = this.ws.SRC; // 'http://127.0.0.1:8080/selfieFederal/';
  constructor(public ws: WsService) {
  }

  ngOnInit() {

  }

  getImageSrc(image) {
    if (image[0] === '.') {
      image = image.replace('.', '');
    }
    return `${this.SRC}${image}`;
  }
}

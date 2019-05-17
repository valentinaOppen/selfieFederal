import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WsService } from '../../../services/ws.service';
// import { AgmInfoWindow } from '@agm/core';

@Component({
  selector: 'app-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.css']
})
export class MarkerInfoComponent implements OnInit {
  @Input() infowindow;
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
  // @Output() markerClick = new EventEmitter<any>();
  SRC = this.ws.SRC; // 'http://127.0.0.1:8080/selfieFederal/';
  constructor(
    public ws: WsService,
    // public iff: AgmInfoWindow
    ) {
    // console.log(iff.close());
  }

  ngOnInit() {

  }

  click(e) {
    
    if (this.infowindow) {
      this.infowindow.close();
    }
    // this.markerClick.emit(this.infowindow);
  }
  getImageSrc(image) {
    if (image[0] === '.') {
      image = image.replace('.', '');
    }
    return `${this.SRC}${image}`;
  }
}

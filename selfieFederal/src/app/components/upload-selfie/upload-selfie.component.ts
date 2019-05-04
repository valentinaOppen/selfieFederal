import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Imarker } from '../maps/imaps';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'upload-selfie',
  templateUrl: './upload-selfie.component.html',
  styleUrls: ['./upload-selfie.component.css']
})
export class UploadSelfieComponent implements OnInit {
  @Output() onCargar = new EventEmitter<any>();
  @Input('default')
  set default(value: any) {
    
    this.webcamImage = undefined;
  }
  cargando = false;
  mostrar = false;;
  webcamImage: WebcamImage;
  selfie: Imarker;
  nombre;
  constructor(private ws: WsService) { }

  ngOnInit() {
    // console.log(this.webcamImage);
  }

  imageCapture(e) {
    // console.log(e);
    this.webcamImage = e;
    this.mostrar = false;
  }

  handleMapClick(e) {
    console.log(e)
    this.selfie = e;
    // this.selfie.persona = {};
  }

  otra() {
    this.webcamImage = null;
    this.cargando = false;
    this.mostrar = true;
  }
  click() {
    // this.cargando = true;
    this.selfie.persona = {
      nombre: "sin nombre",
      img: this.webcamImage.imageAsBase64
    }

    // this.onCargar.emit({ cargado: true });
    // this.selfie.address = 
    this.ws.setSelfie(this.selfie)
    .subscribe(data => {
      console.log(data)
      this.cargando = false;
      this.onCargar.emit({ cargado: true });
    }, e => {
      console.log(e)
        this.cargando = false;
        this.onCargar.emit({ cargado: false });
    });
    console.log(this.selfie);
  }
}

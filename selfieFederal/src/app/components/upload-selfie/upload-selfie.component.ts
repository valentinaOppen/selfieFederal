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
    
    this.webcamImage = null;
  }
  cargando = false;
  mostrar = false;;
  error = false;
  webcamImage: WebcamImage;
  selfie: Imarker;
  nombre;
  paso = 0;
  verCamara = false;
  constructor(private ws: WsService) { }

  ngOnInit() {
    // console.log(this.webcamImage);
  }

  imageCapture(e) {
    // console.log(e);
    this.webcamImage = e;
    this.mostrar = false;
    this.paso = 1;
    this.verCamara = false;
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
    this.error = false;
  }

  clickFoto() {
    this.paso = 2;
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  click() {
    // this.cargando = true;
    this.paso = 3;
    return;
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
      this.paso = 0;
    }, e => {
      console.log(e)
        this.cargando = false;
        this.error = true;
        this.paso = 0;
        // this.onCargar.emit({ cargado: false });
    });
    console.log(this.selfie);
  }
}

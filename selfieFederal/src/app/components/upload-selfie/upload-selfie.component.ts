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
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCargar = new EventEmitter<any>();
  @Input('default')
    set default(value: any) {
      this.webcamImage = null;
  }
  cargando = false;
  mostrar = false;
  error = false;
  webcamImage: WebcamImage;
  selfie: Imarker;
  nombre;
  paso = 2;
  button = false;
  verCamara = false;
  txt = '';
  acuerdos = false;

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
    // console.log(e)
    this.selfie = e;
    // this.selfie.persona = {};
    if (document.getElementById('acuerdos')['checked']  ===  true) {
      this.button = true;
    } else {
      // console.log("NO ESTA");
      alert('Debe aceptar los acuerdos y condiciones');
      this.button = false;
      // document.getElementById('alertAcuerdos').show;
    }
  }

  otra() {
    this.webcamImage = null;
    this.cargando = false;
    this.mostrar = true;
    this.error = false;
  }

  clickFoto() {
    this.paso = 2;
    if (this.button === true) {
      this.button = false;
    } else {
      this.button = true;
    }

  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  activarBtn() {
    this.button = !this.acuerdos ? true : false;
  }
  click() {
    this.cargando = true;
    if (!this.acuerdos) {
      alert('Debe aceptar los acuerdos y condiciones');
      return false;
    }
    if (this.button === true) {
      this.button = false;
    } else {
      this.button = true;
    }
    // this.paso = 3;
    // return;
    if (!this.selfie) {

      return false;
    }
    this.selfie.persona = {
      nombre: 'sin nombre',
      img: this.webcamImage.imageAsBase64,
      txt: this.txt || ''
    };

    // this.onCargar.emit({ cargado: true });
    // this.selfie.address = 
    this.ws.setSelfie(this.selfie)
    .subscribe(data => {
      // console.log(data);
      this.cargando = false;
      this.onCargar.emit({ cargado: true });
      this.paso = 2;
    }, e => {
      // console.log(e);
      this.cargando = false;
      this.error = true;
      this.paso = 2;
        // this.onCargar.emit({ cargado: false });
    });
    // console.log(this.selfie);
  }
  clickLink(e) {

    e.preventDefault();
    window.open('/acuerdosLegales');
    // routerLink = 'acuerdosLegales'
  }
}

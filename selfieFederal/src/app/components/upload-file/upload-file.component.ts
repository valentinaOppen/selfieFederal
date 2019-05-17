import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Imarker } from '../maps/imaps';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  @Output() onCargar = new EventEmitter<any>();

  selfie: Imarker;
  cargando = false;
  webcamImage;
  error = false;
  captcha = false;
  button = false;
  txt = '';
  alertTxt = false;
  acuerdos = false;
  constructor(private ws: WsService, private router: Router) { }

  ngOnInit() {
  }

  _onCargar(e) {
    // console.log(e)
    this.webcamImage = e;
  }

  handleMapClick(e) {
    // console.log(e)    
    this.selfie = e;
    if(document.getElementById('acuerdos')['checked'] == true)
    {            
      this.button = true;
    }    
    else
    {
      // console.log("NO ESTA");
      alert("Debe aceptar los acuerdos y condiciones");
      this.button = false;
      // document.getElementById('alertAcuerdos').show;
    }
    
    // this.selfie.persona = {};
  }

  // resolved(captchaResponse: string) {
  //   console.log(`Resolved captcha with response ${captchaResponse}:`);
  // }

  activarBtn() {
    this.button = !this.acuerdos ? true : false;
  }
  click() {
    // alert('Debe aceptar los acuerdos y condiciones');
    this.cargando = true;
    // this.captcha = true;

    // if (this.button === true) {
    //   this.button = false;
    // } else  {
    //   this.button = true;
    // }

    if (!this.webcamImage) {
      this.cargando = false;
      return false;
    }

    if (!this.selfie) {
      this.cargando = false;
      return false;
    }

    // this.button = true;
    this.selfie.persona = {
      nombre: 'sin nombre',
      img: this.webcamImage.imageAsBase64,
      txt: this.txt || ''
    };

    if(this.selfie.persona.txt == '')
    {      
      this.alertTxt = true;
      this.cargando = false;      
      // document.getElementById('inputTxt').focus();
    }
    else
    {
      // this.onCargar.emit({ cargado: true });
      this.ws.setSelfie(this.selfie)
      .subscribe(data => {
        console.log(data);
        this.cargando = false;
        this.onCargar.emit({ cargado: true });
      }, e => {
        console.log(e);
        this.cargando = false;
        this.error = true;
        // this.onCargar.emit({ cargado: false });
      });
      // console.log(this.selfie);
      // this.router.navigate['/galeria'];
    }    
  }

  clickLink(e) {

    e.preventDefault();
    window.open('/acuerdosLegales');
    // routerLink = 'acuerdosLegales'
  }
}

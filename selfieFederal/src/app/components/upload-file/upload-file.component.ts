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
  constructor(private ws: WsService, private router:Router) { }

  ngOnInit() {
  }

  _onCargar(e) {
    console.log(e)
    this.webcamImage = e;
  }

  handleMapClick(e) {
    console.log(e)
    this.selfie = e;
    // this.selfie.persona = {};
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  click() {
    // this.cargando = true;
    this.captcha = true;
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
      }, e => {
        console.log(e)
        this.cargando = false;
        this.error = true;
        // this.onCargar.emit({ cargado: false });
      });
    console.log(this.selfie);
    this.router.navigate['/galeria'];
  }
}

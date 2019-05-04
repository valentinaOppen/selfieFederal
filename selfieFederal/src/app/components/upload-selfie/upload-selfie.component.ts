import { Component, Input, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Imarker } from '../maps/imaps';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'upload-selfie',
  templateUrl: './upload-selfie.component.html',
  styleUrls: ['./upload-selfie.component.css']
})
export class UploadSelfieComponent implements OnInit {
  
  @Input('default')
  set default(value: any) {
    
    this.webcamImage = undefined;
  }
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

  click() {
  
    this.selfie.persona = {
      nombre: "sin nombre",
      img: this.webcamImage.imageAsBase64
    }
    // this.selfie.address = 
    this.ws.setSelfie(this.selfie)
    .subscribe(data => {
      console.log(data)
    }, e => {
      console.log(e)
    })
    console.log(this.selfie);
  }
}

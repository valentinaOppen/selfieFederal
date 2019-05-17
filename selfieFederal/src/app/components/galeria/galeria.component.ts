import { Component, OnInit } from '@angular/core';
import { WsService } from '../../services/ws.service'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit 
{

  markers: Array<any>; //Imarker[];
  SRC = this.ws.SRC; // 'http://127.0.0.1:8080/selfieFederal/';

  constructor(private ws: WsService, private location:Location) { }

  ngOnInit() 
  {
    this.ws.getSelfies().subscribe(data => 
      {
        this.markers = data;
      })
  }

  getImageSrc(image) {
    if (image[0] === '.') {
      image = image.replace('.', '');
    }
    return `${this.SRC}${image}`;
  }

  backClicked()  {
    this.location.back();
  }

  muestroVideo(src) {
    const videos = ['x-flv', 'mp4', 'x-mpegURL', 'MP2T', '3gpp', 'quicktime', 'x-msvideo', 'x-ms-wmv'];

    const a = src.split('.');
    const ext = a[a.length - 1];
    console.log(ext);

    return videos.find(data => data === ext)
  }
}

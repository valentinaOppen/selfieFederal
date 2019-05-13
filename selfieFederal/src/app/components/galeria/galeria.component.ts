import { Component, OnInit } from '@angular/core';
import { WsService } from '../../services/ws.service'; 

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit 
{

  markers: Array<any>; //Imarker[];
  SRC = this.ws.SRC; // 'http://127.0.0.1:8080/selfieFederal/';

  constructor(private ws: WsService) { }

  ngOnInit() 
  {
    this.ws.getSelfies().subscribe(data => 
      {
        this.markers = data;
      })
  }

  getImageSrc(image) {    
    return `${this.SRC}${image}`;
  }

  backClicked()
  {
    this.location.back();
  }

  
}

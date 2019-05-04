import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { UploadSelfieComponent } from '../upload-selfie/upload-selfie.component';

@Component({
  selector: 'app-mapa-home',
  templateUrl: './mapa-home.component.html',
  styleUrls: ['./mapa-home.component.css']
})
export class MapaHomeComponent implements OnInit {
  @ViewChild(UploadSelfieComponent) upload: UploadSelfieComponent;
  data;
  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  openModal() {
    this.upload.mostrar = true;
    this.ngxSmartModalService.getModal('myModal').open();
  }

  cargado(e) {
    
    this.ngxSmartModalService.getModal('myModal').close();

  }
  close(e) {
    this.upload.mostrar = false;
    console.log(this.upload)
    this.data = Date();
  }
}

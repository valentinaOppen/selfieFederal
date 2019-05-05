import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { UploadSelfieComponent } from '../upload-selfie/upload-selfie.component';
import 'ngx-smart-modal/ngx-smart-modal.css';

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

  openModalFile() {
    // this.upload.mostrar = true;
    this.ngxSmartModalService.getModal('modalFile').open();
  }

  cargado(e) {
    
    this.ngxSmartModalService.getModal('myModal').close();
  }
  cargadoFile(e) {

    this.ngxSmartModalService.getModal('modalFile').close();
  }
  close(e) {
    this.upload.mostrar = false;
    this.upload.error = false;

    console.log(this.upload)
    this.data = Date();
  }
}

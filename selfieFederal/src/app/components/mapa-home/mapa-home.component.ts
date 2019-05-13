import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { UploadSelfieComponent } from '../upload-selfie/upload-selfie.component';
import 'ngx-smart-modal/ngx-smart-modal.css';
import { WsService } from '../../services/ws.service'; 
import { WindowService } from '../../services/window.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-mapa-home',
  templateUrl: './mapa-home.component.html',
  styleUrls: ['./mapa-home.component.css']
})
export class MapaHomeComponent implements OnInit {
  @ViewChild(UploadSelfieComponent) upload: UploadSelfieComponent;
  data;
  search = '';
  constructor(public ngxSmartModalService: NgxSmartModalService,
    private ws: WsService, private win: WindowService, private router: Router) { }

  markers: Array<any>; //Imarker[];
  markersSearch: any;
  SRC = this.ws.SRC; // 'http://127.0.0.1:8080/selfieFederal/';
  // SRC = 'http://127.0.0.1:8080/selfieFederal/';
  mostrarUploadSelfie = true;
  isVisible: boolean = true;
  coverMap:boolean = true;

  ngOnInit() 
  {
    this.ws.getSelfies2().subscribe(data => 
      {
        // console.log(data)
        this.markers = data;
        this.upload.mostrar = false;
      });

  }

  hideCover()
  {
    this.coverMap = false;
  }

  showCover()
  {
    this.coverMap = true;
  }

  buscar() {
    // console.log(this.search);
    let { search } = this;
    if (search.length > 1) {
      this.ws.searchSelfies(search)
      .subscribe(data => {
        // console.log(data)
        this.markersSearch = data
      }, e => {
        console.log(e)
      })
    }
  }
  async openModal() {
    // console.log(navigator.getUserMedia())

    try {
      let r = await this.win.getNavigator()['permissions'].query({ name: 'camera' })
      // console.log(r)

      if (r.state === 'denied') {
        throw "no camara";
      };
      this.mostrarUploadSelfie = true;
      this.upload.mostrar = true;
      this.upload.paso = 0;
      this.upload.verCamara = true;
      this.ngxSmartModalService.getModal('myModal').open();

    } catch (error) {
      alert("No otorgo permisos para utilizar su camara.")
      // console.log(error);
      this.win.getNavigator().mediaDevices.getUserMedia({ audio: true })
      .then(data => {
        // console.log(data)
        ;
      })
      .catch(e => {
        // console.log(e)
        ;
      }
      );
      // this.win.getNavigator().getMedia({video: true, audio: false},
      // (data, e) => {
      //   console.log(data, e)
      // }, (error, e)=> {
      //   console.log(error, e)
      // }
      // )
    }
       
  }

  openModalFile() {
    // this.upload.mostrar = true;
    this.upload.paso = 0;
    this.ngxSmartModalService.getModal('modalFile').open();
  }

  showDivFile()
  {
    this.isVisible = false;
    // document.getElementById('containerFooterMapa').style('display', 'none');
    // document.getElementById('divFooterMapa').hidden=true;
    // document.getElementById('containerCargarFoto').hidden=false;    
  }

  cargado(e) {
    this.upload.mostrar = false;
    this.upload.paso = 0;
    
    this.ngxSmartModalService.getModal('myModal').close();
    this.mostrarUploadSelfie = false;
  }
  cargadoFile(e) {
    // console.log(e)
    this.isVisible = true;
    this.ngxSmartModalService.getModal('modalFile').close();
  }
  close(e) {
    this.upload.mostrar = false;
    this.upload.error = false;
    this.upload.paso = 2;
    // this.upload.paso = 0;

    // console.log(this.upload)
    this.data = Date();
  }

  navigateTo(ruta) {
    this.router.navigateByUrl("galeria");
  }

  getImageSrc(image) {    
    
    return `${this.SRC}${image}`;
  }
}

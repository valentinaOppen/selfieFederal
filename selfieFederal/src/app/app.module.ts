import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecaptchaModule } from 'ng-recaptcha';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { WebcamModule } from 'ngx-webcam';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FileDropModule } from 'ngx-file-drop';

import { MapsService } from './services/maps.service';
import { HttpService } from './services/http.service';
import { WsService } from './services/ws.service';
import { WindowService } from './services/window.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapaHomeComponent } from './components/mapa-home/mapa-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapsComponent } from './components/maps/maps.component';

import { MarkerInfoComponent } from "./components/maps/marker-info/markerInfoComponent";
import { MapMarkersComponent } from './components/maps/map-markers/map-markers.component';
import { MapClickComponent } from './components/maps/map-click/map-click.component';
import { MapComponent } from './components/maps/map/map.component';
import { CamaraComponent } from './components/camara/camara.component';
import { UploadSelfieComponent } from './components/upload-selfie/upload-selfie.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { UploadComponent } from './components/upload-file/upload/upload.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AutocompleteComponent } from './components/maps/autocomplete/autocomplete.component';
import { AcuerdosLegalesComponent } from './components/acuerdos-legales/acuerdos-legales.component';
import { ShowFileComponent } from './components/show-file/show-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapsComponent,
    MarkerInfoComponent,
    MapMarkersComponent,
    MapClickComponent,
    MapComponent,
    CamaraComponent,
    UploadSelfieComponent,
    MapaHomeComponent,
    FooterComponent,
    SpinnerComponent,
    UploadFileComponent,
    UploadComponent,
    GaleriaComponent,
    AutocompleteComponent,
    AcuerdosLegalesComponent,
    ShowFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtgzQpQEVf70TLbg_UAy0L5CcEYNRdw1w',
      libraries: ['places']
    }),
    WebcamModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot() ,
    FileDropModule,
    RecaptchaModule
  ],
  providers: [
    GoogleMapsAPIWrapper,
    MapsService,
    HttpService,
    WsService,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

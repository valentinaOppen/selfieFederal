import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { WebcamModule } from 'ngx-webcam';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { MapsService } from './services/maps.service';
import { HttpService } from './services/http.service';
import { WsService } from './services/ws.service';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtgzQpQEVf70TLbg_UAy0L5CcEYNRdw1w'
    }),
    WebcamModule,
    FormsModule,
    NgxSmartModalModule.forRoot() 
  ],
  providers: [
    GoogleMapsAPIWrapper,
    MapsService,
    HttpService,
    WsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { MapsService } from './services/maps.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapsComponent } from './components/maps/maps.component';

import { MarkerInfoComponent } from "./components/maps/marker-info/markerInfoComponent";
import { MapMarkersComponent } from './components/maps/map-markers/map-markers.component';
import { MapClickComponent } from './components/maps/map-click/map-click.component';
import { MapComponent } from './components/maps/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapsComponent,
    MarkerInfoComponent,
    MapMarkersComponent,
    MapClickComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtgzQpQEVf70TLbg_UAy0L5CcEYNRdw1w'
    })
  ],
  providers: [
    GoogleMapsAPIWrapper,
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

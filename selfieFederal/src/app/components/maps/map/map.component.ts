import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Icoords, Imarker, ILocation as Location, ILatLng } from '../imaps';
import { GoogleMapsAPIWrapper, MapsAPILoader,  } from '@agm/core/services';
import { MapsService } from '../../../services/maps.service';
import { WindowService } from '../../../services/window.service';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	private _latLng = {
		lat: null, // -34.6156625,
		lng: null // -58.5033386
	};
	@Input() marcadores = true;
	@Input() zoom = 8;
	@Input()
	set latLng(value: ILatLng) {
		console.log(value)
		// Si no existe tomar actual
		if (value) {
			this._latLng = value;			
		} else {
			// if (this.winRef.coords) {
			// 	this._latLng = {
			// 		lat: this.winRef.latitude,
			// 		lng: this.winRef.longitude
			// 	}	
			// } else {
			// 	this._latLng = {
			// 		lat: -34.6156625,
			// 		lng: -58.5033386
			// 	}
			// }
		}
	}
	@Input() markers: Array<Imarker>;
	get latLng() {
		return this._latLng;
	}
	@Output() mapClick = new EventEmitter<any>();
	abrirMatkers = false;

	constructor(private maps: MapsService, private winRef: WindowService) {

	}
	
	ngOnInit() {
		console.log(this._latLng)
		console.log(this.winRef.coordsExists())


		if (!this._latLng.lat) {
			this.winRef.nativeWindow.navigator.geolocation.getCurrentPosition(data => {

				this._latLng = {
					lat: data.coords.latitude,
					lng: data.coords.longitude
				}
			}, err => {

					this._latLng = {
						lat: -34.6156625,
						lng: -58.5033386
					}
					this.zoom = 5;
			});
			// if (this.winRef.coordsExists()) {
				
			// }
		} else {
			this._latLng = {
				lat: -34.6156625,
				lng: -58.5033386
			}
			this.zoom = 5;
		}
		console.log(this._latLng)
	}

	async handlerMapClick(e: Icoords) {
		let r = await this.maps.findAddressByCoordinates(e.coords);
		console.log(r)
		this.mapClick.emit(r);
	}

	zoomChange(e) {
		console.log(e);

		if ( e > 8) {
			this.abrirMatkers = true;
		} else {
			this.abrirMatkers = false;
		}
		this.markers.map(item => {
			// console.log(item)
		})
	}
}

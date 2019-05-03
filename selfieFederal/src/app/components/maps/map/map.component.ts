import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Icoords, Imarker, ILocation as Location, ILatLng } from '../imaps';
// import { GoogleMapsAPIWrapper, MapsAPILoader,  } from '@agm/core/services';
import { MapsService } from '../../../services/maps.service';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	private _latLng = {
		lat: -34.6156625,
		lng: -58.5033386
	};
	@Input() marcadores = true;
	@Input() zoom = 8;
	@Input()
	set latLng(value: ILatLng) {
		// console.log(value)
		// Si no existe tomar actual
		if (value) {
			this._latLng = value;			
		} else {
			this._latLng = {
				lat: -34.6156625,
				lng: -58.5033386
			}
		}
	}
	@Input() markers: Array<Imarker>;
	get latLng() {
		return this._latLng;
	}
	@Output() mapClick = new EventEmitter<any>();

	constructor(private maps: MapsService) {}
	
	ngOnInit() {}

	async handlerMapClick(e: Icoords) {
		
		let r = await this.maps.findAddressByCoordinates(e.coords);
		this.mapClick.emit(r);
	}
}

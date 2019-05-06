import { Injectable } from '@angular/core';
import { 
	GoogleMapsAPIWrapper,
	MapsAPILoader, } from '@agm/core/services';
import { Icoords,
	// Imarker,
	ILatLng,
	ILocation as Location } from '../components/maps/imaps';

@Injectable({
	providedIn: 'root'
})
export class MapsService {

	private geocoder;
	constructor(public mapsApiLoader: MapsAPILoader) {
		this.mapsApiLoader.load().then(() => {
			this.geocoder = new google.maps.Geocoder();
		});
	}

	findAddressByCoordinates(coords: ILatLng) {
		

		return new Promise((resolve, reject) => {
			this.geocoder.geocode({
				'location': {
					lat: coords.lat,
					lng: coords.lng
				},
				language: 'es-419',
				// bounds: 'AR',
				// componentRestrictions: ['administrativeArea'],
				region: 'AR'
			}, (results, status) => {
				console.log(results, status);
				if (status !== 'OK') {
					return reject({error: "Error en mapa."});
				}
				resolve({
					status, address: this.decomposeAddressComponents(results), ...coords
				});
			})
		})
	}

	decomposeAddressComponents(addressArray) {
		if (addressArray.length == 0) return false;
		let address = addressArray[0].address_components;
		let location = {};
		for (let element of address) {
			if (element.length == 0 && !element['types']) continue

			if (element['types'].indexOf('street_number') > -1) {
				location['address_level_1'] = element['long_name'];
				continue;
			}
			if (element['types'].indexOf('route') > -1) {
				location['address_level_1'] += ', ' + element['long_name'];
				continue;
			}
			if (element['types'].indexOf('locality') > -1) {
				location['address_level_2'] = element['long_name'];
				continue;
			}
			if (element['types'].indexOf('administrative_area_level_1') > -1) {
				location['address_state'] = element['long_name'];
				continue;
			}
			if (element['types'].indexOf('country') > -1) {
				location['address_country'] = element['long_name'];
				continue;
			}
			if (element['types'].indexOf('postal_code') > -1) {
				location['address_zip'] = element['long_name'];
				continue;
			}
		}

		return location;
	}
}

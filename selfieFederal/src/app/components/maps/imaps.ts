export interface Imaps {
}

export interface Imarker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    persona?: IPersona;
    address: ILocation;
}
export interface Icoords {
    coords: {
        lat: number,
        lng: number
    }
}

export interface ILatLng {
    lat: number,
    lng: number
}

export interface ILocation {
    lat: number;
    lng: number;
    viewport?: Object;
    zoom: number;
    address_level_1?: string;
    address_level_2?: string;
    address_country?: string;
    address_zip?: string;
    address_state?: string;
    marker?: Imarker;
}

export interface IPersona {
    img: string,
    nombre?: string,
    txt?: string
}
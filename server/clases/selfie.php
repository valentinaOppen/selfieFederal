<?php
class Selfie
{
	public $id;
	public $lat;
	public $lng;
	public $id_address;
	public $nombre;
	public $pais;
	public $provincia;
	public $ciudad;
	public $address;
	public $visible;

	// function __construct($lat, $lng, $id_address, $nombre, $pais, $provincia, $ciudad, $address, $visible) {
	function __construct($selfie) {
		$selfie = (object)$selfie;
		
		$this->lat = $selfie->lat;
		$this->lng = $selfie->lng;
		$this->id_address = $selfie->id_address?$id_address:null;
		$this->nombre = $selfie->nombre;
		$this->pais = $selfie->pais;
		$this->provincia = $selfie->provincia;
		$this->ciudad = $selfie->ciudad;
		$this->address = $selfie->address;
		$this->visible = $selfie->visible;					
	}
}
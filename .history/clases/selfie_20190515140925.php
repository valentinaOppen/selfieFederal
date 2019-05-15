<?php
include_once './clases/images.php';
include_once './clases/selfieDAO.php';

class Selfie
{
	public $id;
	public $lat;
	public $lng;
	public $sitio;
	public $id_pais;
	public $id_state;
	public $id_sitio;
	public $pais;
	public $provincia;
	public $ciudad;
	public $persona;
	public $address;
	public $visible;

	// function __construct($selfie) {
		public function __construct() {
		// $selfie = (object)$selfie;
		
		// $this->lat = $lat;
		// $this->lng = $selfie->lng;
		// $this->id_address = $selfie->id_address?$id_address:null;
		// $this->nombre = $selfie->nombre;
		// $this->pais = $selfie->pais;
		// $this->provincia = $selfie->provincia;
		// $this->ciudad = $selfie->ciudad;
		$this->persona = json_decode($this->persona, true);
		$this->address = json_decode($this->address, true);
		// $this->visible = $this->visible;					
	}

	static public function cargarSelfie($selfie) {
		$rta = Images::base64_to_jpeg($selfie['persona']['img'], Date('U').'.');
		return $rta;
		if ($rta) {
			$selfie['persona']['img'] = $rta;
			// var_dump($selfie);
			return SelfieDAO:: insertarSelfie($selfie);
		}
	}
}
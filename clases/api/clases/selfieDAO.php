<?php
// include_once './clases/selfie.php';
class SelfieDAO
{
	public $id;
 	public $titulo;
  	public $cantante;
  	public $año;



  	static public function borrarSelfie($id)
	 {
	 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update selfies
				set visible = 0			
				WHERE id=:id");	
				$consulta->bindValue(':id',$id, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();
	 }

	public static function borrarBorrarSelfie($id) {

			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				delete 
				from selfies 				
				WHERE id=:id");	
				$consulta->bindValue(':id',$id, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();

	 }

    public function visibleSelfie($id) {
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("
			update selfies 
			set visible= ?
			WHERE id = ?");
			
		return $consulta->execute(array(1, $id));
	}
	// public function modificarSelfie()
	//  {

	// 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	// 		$consulta =$objetoAccesoDato->RetornarConsulta("
	// 			update selfies 
	// 			set titel='$this->titulo',
	// 			interpret='$this->cantante',
	// 			jahr='$this->año'
	// 			WHERE id='$this->id'");
	// 		return $consulta->execute();
	//  }
	
  
	public static function insertarSelfie($selfie)
	{
		
		// var_dump( isset($selfie['address']));
		if (isset($selfie['address'])) {
			$id_pais = $selfie['address']['id_address_country'];
			$id_state = $selfie['address']['id_address_1'];
			$id_sitio = $selfie['address']['id_address_sitio'];
			$pais = $selfie['address']['address_country'];
			$provincia = $selfie['address']['address_state_1'];
			$ciudad = $selfie['address']['address_state_2'];
			$sitio = $selfie['address']['sitio'];
			$txt = $selfie['persona']['txt'];
		}
		$query = "INSERT into selfies (lat, lng, sitio, id_pais, id_state, id_sitio, pais, provincia, ciudad, persona, address, fecha, txt) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?)";
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta($query);
		$rta = $consulta->execute(array($selfie['lat'], $selfie['lng'], $sitio, $id_pais, $id_state, $id_sitio, $pais, $provincia, $ciudad, json_encode($selfie['persona']), json_encode($selfie['address']), $txt));
		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

  	public static function getAllSelfies()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select id, lat, lng, sitio, id_pais, id_state, id_sitio, pais, provincia, ciudad, persona, address, visible from selfies order by fecha DESC");
			$consulta->execute();			
			// return $consulta->fetchAll(PDO::FETCH_OBJ);		
			return $consulta->fetchAll(PDO::FETCH_CLASS, "Selfie");		
	}

	public static function searchSelfies($sitio)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta = $objetoAccesoDato->RetornarConsulta("select id, lat, lng, sitio, id_pais, id_state, id_sitio, pais, provincia, ciudad, persona, address, visible from selfies where sitio LIKE ? ");
		$consulta->execute(array("%$sitio%"));
		// $consulta->execute();
		// return $consulta->fetchAll(PDO::FETCH_OBJ);		
		return $consulta->fetchAll(PDO::FETCH_CLASS, "Selfie");
	}
	public static function getTwoSelfies()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta( "select id, lat, lng, sitio, id_pais, id_state, id_sitio, pais, provincia, ciudad, persona, address, visible from selfies order by fecha DESC LIMIT 2");
			$consulta->execute();			
			// return $consulta->fetchAll(PDO::FETCH_OBJ);		
			return $consulta->fetchAll(PDO::FETCH_CLASS, "Selfie");		
	}

	public static function getOneSelfie($id) 
	{
	    $query = "select * from selfies where id = ?";
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 			
		$consulta =$objetoAccesoDato->RetornarConsulta($query);
		$consulta->execute(array($id));
		
		// return $consulta->fetchAll(PDO::FETCH_CLASS, 'Selfie');
		return $consulta->fetchAll(PDO::FETCH_OBJ);		

			
	}

}
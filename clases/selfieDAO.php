<?php
include_once './clases/selfie.php';
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
	
  
	public function insertarSelfie($selfie)
	{
		$query = "INSERT into selfies (lat, lng, id_address, nombre, pais, provincia, ciudad, address, visible) values(?, ?, ?, ?, ?, ?, ?, ?, ?)";
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta($query);
		$consulta->execute(array(
			$selfie->lat, $selfie->lng, $selfie->id_address, $selfie->nombre, $selfie->pais, 
			$selfie->provincia, $selfie->ciudad, $selfie->address, 0
		));
		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

  	public static function getAllSelfies()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select id, lat, lng, id_address, nombre, pais, provincia, ciudad, persona, address, visible from selfies");
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
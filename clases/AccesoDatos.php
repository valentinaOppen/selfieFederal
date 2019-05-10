<?php
define("DB", "selfie");
define("USER", "root");
define("PASSWORD", "");

define("DB_PROD", "c1481262_selfie");
define("USER_PROD", "c1481262_selfie");
define("PASSWORD_PROD", "kusa33ZIge");
class AccesoDatos
{
    private static $ObjetoAccesoDatos;
    private $objetoPDO;

    private function __construct()
    {
        try { 
            $this->objetoPDO = new PDO('mysql:host=localhost;dbname='.DB_PROD.';charset=utf8', USER_PROD, PASSWORD_PROD, array(PDO::ATTR_EMULATE_PREPARES => false,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            // $this->objetoPDO = new PDO('mysql:host=localhost:3306;dbname='.DB.';charset=utf8', USER, PASSWORD, array(PDO::ATTR_EMULATE_PREPARES => false,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            $this->objetoPDO->exec("SET CHARACTER SET utf8");
            } 
        catch (PDOException $e) { 
            print "Error!: " . $e->getMessage(); 
            die();
        }
    }
 
    public function RetornarConsulta($sql)
    { 
        return $this->objetoPDO->prepare($sql); 
    }
     public function RetornarUltimoIdInsertado()
    { 
        return $this->objetoPDO->lastInsertId(); 
    }
 
    public static function dameUnObjetoAcceso()
    { 
        if (!isset(self::$ObjetoAccesoDatos)) {          
            self::$ObjetoAccesoDatos = new AccesoDatos(); 
        } 
        return self::$ObjetoAccesoDatos;        
    }
 
 
     // Evita que el objeto se pueda clonar
    public function __clone()
    { 
        trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR); 
    }
}
?>
<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './composer/vendor/autoload.php';
require_once './clases/AccesoDatos.php';
require_once './rutas/selfiesApi.php';
// require_once './clases/AutentificadorJWT.php';
// require_once './clases/MWparaCORS.php';
// require_once './clases/MWparaAutentificar.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
// $app->group('/cd', function () {
 
//   $this->get('/', \cdApi::class . ':traerTodos')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
	
//   $this->get('/{id}', \cdApi::class . ':traerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');

//   $this->post('/', \cdApi::class . ':CargarUno');

//   $this->delete('/', \cdApi::class . ':BorrarUno');

//   $this->put('/', \cdApi::class . ':ModificarUno');
     
// })->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORS8080');

$app->group('/selfies', function() {
	// Traer todos
	$this->get('[/]', \SelfiesApi::class . ':getAll');
	// Traer uno
	$this->get('/{id}', \SelfiesApi::class . ':getOne');
	// Cargar selfie
	$this->post('[/]', \SelfiesApi::class . ':setSelfie');
	// Visible no
	$this->delete('/visible/{id}', \SelfiesApi::class . ':deleteOne');
	// Visible si
	$this->put('/visible/{id}', \SelfiesApi::class . ':visibleOne');
});

$app->group('/admin', function() {

});

$app->run();
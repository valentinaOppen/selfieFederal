<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
date_default_timezone_set("America/Argentina/Buenos_Aires");
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './composer/vendor/autoload.php';
require_once './clases/AccesoDatos.php';
require_once './rutas/selfiesApi.php';
require_once './rutas/adminApi.php';
// require_once './clases/AutentificadorJWT.php';
require_once './middlewares/MWparaCORS.php';
require_once './middlewares/MWparaAutentificar.php';

// $config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
// $app->group('/cd', function () {6Lei_qIUAAAAAOZUS1G89jTO6k3qHD230zd5n1Wh
 
//   $this->get('/', \cdApi::class . ':traerTodos')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
	
//   $this->get('/{id}', \cdApi::class . ':traerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');

//   $this->post('/', \cdApi::class . ':CargarUno');

//   $this->delete('/', \cdApi::class . ':BorrarUno');

//   $this->put('/', \cdApi::class . ':ModificarUno');
     
// })->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORS8080');
$app->get('/test', function($req, $res) {
	$im = 'AAAFBfj42Pj4';
	$im = base64_encode(base64_decode($im, true));
	return $res->write($im);
});

$app->group('/admin', function() {
	$this->post('/login[/]', \AdminApi::class . ':login');
	// Get 
	$this->get('/{visible}', \AdminApi::class . ':getAll')->add(\MWparaAutentificar::class . ':VerificarUsuario');
	// Visible no
	$this->delete('/visible/{id}', \SelfiesApi::class . ':deleteOne')->add(\MWparaAutentificar::class . ':VerificarUsuario');
	// Visible si
	$this->put('/visible/{id}', \SelfiesApi::class . ':visibleOne')->add(\MWparaAutentificar::class . ':VerificarUsuario');
});
$app->group('/selfies', function() {
	// Traer todos
	$this->get('[/]', \SelfiesApi::class . ':getAll');
	// Search
	$this->get('/search/{sitio}', \SelfiesApi::class . ':searchSelfies');
	// Traer uno
	$this->get('/{id}', \SelfiesApi::class . ':getOne');
	// Cargar selfie
	$this->post('[/]', \SelfiesApi::class . ':setSelfie');

});//->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/selfies_2', function() {
	// Traer todos
	$this->get('[/]', \SelfiesApi::class . ':getTwo');
	// Traer uno
});//->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/admin', function() {

});

$app->run();
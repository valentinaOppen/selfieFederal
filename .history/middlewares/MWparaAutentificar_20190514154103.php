<?php

require_once "./clases/AutentificadorJWT.php";
class MWparaAutentificar
{
 /**
   * @api {any} /MWparaAutenticar/  Verificar Usuario
   * @apiVersion 0.1.0
   * @apiName VerificarUsuario
   * @apiGroup MIDDLEWARE
   * @apiDescription  Por medio de este MiddleWare verifico las credeciales antes de ingresar al correspondiente metodo 
   *
   * @apiParam {ServerRequestInterface} request  El objeto REQUEST.
 * @apiParam {ResponseInterface} response El objeto RESPONSE.
 * @apiParam {Callable} next  The next middleware callable.
   *
   * @apiExample Como usarlo:
   *    ->add(\MWparaAutenticar::class . ':VerificarUsuario')
   */
	public function VerificarUsuario($request, $response, $next) {
         
		$objDelaRespuesta= new stdclass();
		$objDelaRespuesta->respuesta="";
		$responseError = $response->withJson(array('error' => '500'), 500);  

		$arrayConToken = $request->getHeaders();
		// var_dump($arrayConToken);
		if (!isset($arrayConToken['HTTP_TOKEN'])) {

			return $responseError;
		}
		
		try {
			$token = $arrayConToken['HTTP_TOKEN'][0];
			// var_dump($token);
			if (AutentificadorJWT::verificarTokenII($token)) {

				$responseError = $next($request, $response);
			} else {

			}

			return $responseError;
		} catch (\Throwable $th) {
			//throw $th;
			 return $responseError;
		}


	}
}
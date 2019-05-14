<?php
require_once './clases/selfieDAO.php';
require_once './clases/selfie.php';
require_once './clases/AutentificadorJWT.php';

class AdminApi
{
    static public function login($request, $response, $args) {
        $body = $request->getParsedBody();
        $selfies=SelfieDAO::login($body['user'], $body['clave']);
        
        if (count($selfies) > 0) {
            $jwt = AutentificadorJWT::CrearToken($body);
         	$newresponse = $response->withJson(array('jwt' => $jwt), 200);              
        } else {
            $newresponse = $response->withJson($selfies, 200);              
        }

    	return $newresponse;
    }

    static public function getAll($request, $response, $args) {
        $id = $args['visible'];
        if (!is_numeric($id)) {
            $rta['rta'] = "Error en parametro";
            return $response->withJson($rta);
        }
      	$selfies=SelfieDAO::getAllByVisible($id);
     	$newresponse = $response->withJson($selfies, 200);  
    	return $newresponse;
    }

    static public function visible($request, $response, $args)
    {
        $sitio = $args['sitio'];
        if (!$sitio) {
            $rta['rta'] = "Error en parametro";
            return $response->withJson($rta);
        }
        $selfies = SelfieDAO:: searchSelfies($sitio);
        $newresponse = $response->withJson($selfies, 200);
        return $newresponse;
    }
   
}
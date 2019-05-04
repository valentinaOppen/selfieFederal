<?php
require_once './clases/selfieDAO.php';
require_once './clases/selfie.php';

class SelfiesApi
{
    static public function getAll($request, $response, $args) {
      	$selfies=SelfieDAO::getAllSelfies();
     	$newresponse = $response->withJson($selfies, 200);  
    	return $newresponse;
    }

    static public function getOne($request, $response, $args) {
        $id = $args['id'];
        if (!is_numeric($id)) {
            $rta['rta'] = "Error en parametro";
            return $response->withJson($rta);
        }
      	$selfies=SelfieDAO::getOneSelfie($id);
     	$newresponse = $response->withJson($selfies, 200);  
    	return $newresponse;
    }

    static public function deleteOne($request, $response, $args) {
        $id = $args['id'];
        if (!is_numeric($id)) {
            $rta['rta'] = "Error en parametro";
            return $response->withJson($rta);
        }
          $selfies=SelfieDAO::borrarSelfie($id);
          if ($selfies == 1) {
              $rta['rta'] = "1";
          } else {
              $rta['rta'] = "0";
          }
     	$newresponse = $response->withJson($rta, 200);
    	return $newresponse;
    }

        static public function visibleOne($request, $response, $args) {
        $id = $args['id'];
        if (!is_numeric($id)) {
            $rta['rta'] = "Error en parametro";
            return $response->withJson($rta);
        }
          $selfies = SelfieDAO::visibleSelfie($id);
          if ($selfies) {
              $rta['rta'] = "1";
          } else {
              $rta['rta'] = "0";
          }
     	$newresponse = $response->withJson($rta, 200);
    	return $newresponse;
    }

    static public function setSelfie($request, $response) {
        $body = $request->getParsedBody();
        // $selfie = new Selfie($body);
        // $rta = SelfieDAO::insertarSelfie($selfie);
        
        $rta = Selfie::cargarSelfie($body);
        return $response->withJson($body);
    }
}
<?php
require_once './config.php';
// accepter les requetes provenant du port 4200
header("Access-Control-Allow-Origin: http://localhost:4200" );
header("Access-Control-Allow-Headers: *" );
header('Access-Control-Allow-Credentials: true' );
header("Access-Control-Allow-Methods: *" );
$json = file_get_contents('php://input');
$data = json_decode($json,true);

$nom =$data["nom"];
$iddepart =$data["iddepart"];

if ($connexion->exec("INSERT INTO filieres (nom,iddepart) values('$nom','$iddepart')")) {
 echo json_encode(["status"=>true,"message"=>"filiere ajouté avec succés"]);
} else {
 echo json_encode(["status"=>false,"message"=>"Erreur d'ajout"]);
}

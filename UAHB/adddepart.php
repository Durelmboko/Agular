<?php
require_once './config.php';
// accepter les requetes provenant du port 4200
header("Access-Control-Allow-Origin: http://localhost:4200" );
header("Access-Control-Allow-Headers: *" );
header('Access-Control-Allow-Credentials: true' );
header("Access-Control-Allow-Methods: *" );
$json = file_get_contents('php://input');
$data = json_decode($json,true);

$faculte =$data["faculte"];
$chef_departement =$data["chef_departement"];

if ($connexion->exec("INSERT INTO departement(faculte,chef_departement) values('$faculte','$chef_departement')")) {
 echo json_encode(["status"=>true,"message"=>"departement ajouté avec succés"]);
} else {
 echo json_encode(["status"=>false,"message"=>"Erreur d'ajout"]);
}

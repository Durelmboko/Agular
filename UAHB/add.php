<?php
require_once './config.php';
header("Access-Control-Allow-Origin: http://localhost:4200" );
header("Access-Control-Allow-Headers: *" );
header('Access-Control-Allow-Credentials: true' );
header("Access-Control-Allow-Methods: *" ); 
$json = file_get_contents('php://input');
$data = json_decode($json,true);
$nom=$data["nom"];
$prenom=$data["prenom"];
$naissance=$data["naissance"];
$sexe=$data["sexe"];
$adresse=$data["adresse"];
$nationalite=$data["nationalite"];
$email=$data["email"];
$codef=$data["codef"];
$niveau=$data["niveau"];
$pre_requis=$data["pre_requis"];

if ($connexion->exec("insert into condidat(nom, prenom, naissance, sexe, adresse, nationalite, email, codef, niveau, pre_requis) values('$nom', '$prenom', '$naissance', '$sexe', '$adresse', '$nationalite', '$email', '$codef', '$niveau','$pre_requis')")) {
 echo json_encode(["status"=>true,"message"=>"condidat ajouté avec succés"]);
} else {
 echo json_encode(["status"=>false,"message"=>"Erreur d'ajout"]);
}

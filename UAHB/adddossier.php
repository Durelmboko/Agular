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
$sexe=$data["sexe"];
$pre_requis=$data["pre_requis"];
$etat_dossier=$data["etat_dossier"];
$idsec=$data["idsec"];


if ($connexion->exec("insert into dossier(nom, prenom, sexe, pre_requis, etat_dossier, idsec) values('$nom', '$prenom', '$sexe', '$pre_requis', '$etat_dossier', '$idsec')")) {
 echo json_encode(["status"=>true,"message"=>"dossier ajouté avec succés"]);
} else {
 echo json_encode(["status"=>false,"message"=>"Erreur d'ajout"]);
}

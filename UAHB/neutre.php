<?php
require_once './config.php';
// accepter les requetes provenant du port 4200
header("Access-Control-Allow-Origin: http://localhost:4200" );
header("Access-Control-Allow-Headers: *" );
header('Access-Control-Allow-Credentials: true' );
header("Access-Control-Allow-Methods: *" );
$json = file_get_contents('php://input');
$data = json_decode($json,true);
$iddepart = $data["iddepart"];
$faculte =$data["faculte"];
$chef_departement =$data["chef_departement"];


if ($connexion->exec("UPDATE departement SET faculte='$faculte',chef_departement='$chef_departement'  WHERE iddepart = '" . $_GET["iddepart"] . "'")) {
    echo json_encode(["status"=>true,"message"=>"departement modiffier avec succés"]);
   } else {
    echo json_encode(["status"=>false,"message"=>"Erreur modiffication"]);
   }


   create table dossier(
    id int,
    nom varchar(20),
    prenom varchar(20),
    sexe varchar(20),
    pre_requis varchar(20),
    etat_dossier varchar(20),
    idsec int,
    
    
   )
<?php
require_once './config.php';
// accepter les requetes provenant du port 4200
header("Access-Control-Allow-Origin: http://localhost:4200" );
header("Access-Control-Allow-Headers: *" );
header('Access-Control-Allow-Credentials: true' );
header("Access-Control-Allow-Methods: *" );
$les_condidat=$connexion->query("select * from condidat" )->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($les_condidat) ;
?>
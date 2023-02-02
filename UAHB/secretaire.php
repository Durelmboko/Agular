<?php
require_once './config.php';
// accepter les requetes provenant du port 4200
header("Access-Control-Allow-Origin: http://localhost:4200" );
header("Access-Control-Allow-Headers: *" );
header('Access-Control-Allow-Credentials: true' );
header("Access-Control-Allow-Methods: *" );
$secretaire=$connexion->query("SELECT * FROM secretaire " )->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($secretaire) ;
?>



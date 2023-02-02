<?php
require_once './config.php';
// accepter les requetes provenant du port 4200
header("Access-Control-Allow-Origin: http://localhost:4200" );
header("Access-Control-Allow-Headers: *" );
header('Access-Control-Allow-Credentials: true' );
header("Access-Control-Allow-Methods: *" );
$id=$_GET["id"];
$les_candidats=$connexion->query("SELECT * FROM condidat WHERE idcon=$id" )->fetch();//fetchAll(PDO::FETCH_ASSOC);
echo json_encode($les_candidats) ;
?>



<?php
require_once './config.php';
header("Access-Control-Allow-Origin: http://localhost:4200" );
header("Access-Control-Allow-Headers: *" );
header('Access-Control-Allow-Credentials: true' );
header("Access-Control-Allow-Methods: *" );
$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);
if(isset($postdata) && !empty($postdata))
{
$pwd = $request["password"];
$email = $request["email"];
$sql = "SELECT * FROM users where email='$email' and password='$pwd'";
$result = $connexion->query($sql);
if($result->fetch())
{
    $reponse = array("etat"=>true);
    echo json_encode($reponse);
}
else
{
    $reponse = array("etat"=>false);
    echo json_encode($reponse);
}
}
?>

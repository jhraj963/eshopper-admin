<?php
include 'connection.php';
$data = json_decode(file_get_contents("php://input"));
$id=$data->id;
$sql = "delete from `categories` where id=$id";

$result=$db->query($sql);
if($result)
	echo json_encode(array("message" => "Successful deleted"));
else
	echo json_encode(array("message" => "Failed."));

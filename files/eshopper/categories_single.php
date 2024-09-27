<?php
include 'connection.php';
$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$data = [];

$sql = "SELECT * FROM categories where id=$id";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$data= $row;
}
	echo json_encode($data); 
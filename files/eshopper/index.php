<?php
include 'connection.php';
appointment = [];

$sql = "SELECT * FROM appointment";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$appointment[]= $row;
}
	echo json_encode(appointment); 
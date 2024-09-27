<?php
include 'connection.php';
$data = json_decode(file_get_contents("php://input"));

if($data){
	$cat_name = $data->cat_name;
	$cat_des = $data->cat_des;
	$status = $data->status;
	
	if($data->id){
		$sql = "update `categories` set cat_name='$cat_name', cat_des='$cat_des',status='$status' where id=$data->id";
	}else{
		$sql = "insert into `categories` set cat_name='$cat_name', cat_des='$cat_des',status='$status'";
	}
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful saved."));
	else
		echo json_encode(array("message" => "Failed."));
	
}


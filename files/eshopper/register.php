<?php
include 'connection.php';
$data = json_decode(file_get_contents("php://input"));

if($data){
	$name_en = $data->name_en;
	$email = $data->email;
	$contact_no_en = $data->contact_no_en;
	$password = sha1($data->password);
	$token =time().rand(111,999).md5($email);
	
	$sql = "insert into `users` set name_en='$name_en', email='$email',contact_no_en='$contact_no_en', password='$password', remember_token='$token'";
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful register."));
	else
		echo json_encode(array("message" => "Register failed."));
	
}


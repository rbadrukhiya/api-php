<?php 
	$con = mysqli_connect('localhost' , 'root' , '' , 'api');

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');


$data = json_decode(file_get_contents('php://input'), true);
$id = $data['edit_id'];


if(isset($data))
{
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
$contact = $data['contact'];

echo $name;
echo $email;
echo $password;
echo $contact;
	if(isset($id))
	{
		$update = "update user set name='$name' , email='$email' , password='$password' , contact='$contact' where id='$id'";
		$up_data = mysqli_query($con , $update);
	}
	else
	{
		$insert = "insert into user (name , email , password , contact) values('$name' , '$email' , '$password' , '$contact')";
$a = mysqli_query($con , $insert);
	}
}


// echo json_encode($data);




 ?>
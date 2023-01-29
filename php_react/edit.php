<?php 


$con = mysqli_connect('localhost' , 'root' , '' , 'api');


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');



$data = json_decode(file_get_contents('php://input'), true);

$edit = $data['edit_id'];
// $edit_name = $data['e_name'];
// $edit_email = $data['e_email'];
// $edit_password = $data['e_password'];
// $edit_contact = $data['e_contact'];
    


$a ="select * from user where id = '$edit'";
$b=mysqli_query($con , $a);
$c=mysqli_fetch_assoc($b);
echo json_encode($c);


 ?>
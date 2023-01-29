<?php 

$con = mysqli_connect('localhost' , 'root' , '' , 'api');


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');



$data = json_decode(file_get_contents('php://input'), true);
$del = $data['del_id'];
print_r(json_encode($del));
$del_query = "delete from user where id = '$del'";
mysqli_query($con , $del_query);


 ?>
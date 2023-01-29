<?php 
$conn = mysqli_connect("localhost" , "root" , "" , "api");

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');


$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
$contact = $data['contact'];

echo $name;
echo $email;
echo $password;
echo $contact;
    
    $insert = "insert into user (name , email , password , contact) values ('$name' , '$email' , '$password' , '$contact')";
    mysqli_query($conn , $insert);

    // $select = "select * from demo";
    // $sel_data = mysqli_query($conn , $select);
    // $arr = mysqli_assoc_fetch($select_data);     

    // echo 


 ?>

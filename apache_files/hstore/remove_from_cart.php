<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hstore";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

if(isset($data->product_id)) {
    $product_id = $data->product_id;

    $sql = "DELETE FROM cart WHERE product_id = '$product_id'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Product removed from cart successfully"]);
    } else {
        echo json_encode(["message" => "Error removing product: " . $conn->error]);
    }
} else {
    echo json_encode(["message" => "Invalid input"]);
}

$conn->close();
?>

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

$product_id = (int)$data->product_id;
$quantity = (int)$data->quantity;

$sql = "UPDATE cart SET quantity = ? WHERE product_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $quantity, $product_id);

if ($stmt->execute()) {
    echo json_encode(["message" => "Quantity updated successfully"]);
} else {
    echo json_encode(["message" => "Failed to update quantity"]);
}

$stmt->close();
$conn->close();
?>

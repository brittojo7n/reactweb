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

$data = json_decode(file_get_contents("php://input"), true);
$product_id = $data['product_id'];

// Check if the product already exists in the cart
$check_sql = "SELECT * FROM cart WHERE product_id = $product_id";
$result = $conn->query($check_sql);

if ($result->num_rows > 0) {
    // If product exists, update the quantity
    $update_sql = "UPDATE cart SET quantity = quantity + 1 WHERE product_id = $product_id";
    if ($conn->query($update_sql) === TRUE) {
        echo json_encode(["message" => "Product quantity updated"]);
    } else {
        echo json_encode(["message" => "Error updating product quantity: " . $conn->error]);
    }
} else {
    // If product does not exist, insert it
    $product_sql = "SELECT * FROM product WHERE product_id = $product_id";
    $product_result = $conn->query($product_sql);
    $product = $product_result->fetch_assoc();
    
    $insert_sql = "INSERT INTO cart (product_id, product_name, product_img, product_desc, product_price, quantity) 
                   VALUES ($product_id, '{$product['product_name']}', '{$product['product_img']}', '{$product['product_desc']}', {$product['product_price']}, 1)";
    if ($conn->query($insert_sql) === TRUE) {
        echo json_encode(["message" => "Product added to cart"]);
    } else {
        echo json_encode(["message" => "Error adding product to cart: " . $conn->error]);
    }
}

$conn->close();
?>

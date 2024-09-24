<?php
error_log(print_r($_POST, true)); 

$host = 'localhost';
$dbname = 'shopping_app';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $product_name = $_POST['product_name'] ?? '';
    $product_price = $_POST['product_price'] ?? '';
    $product_color = $_POST['product_color'] ?? '';
    $product_quantity = $_POST['product_quantity'] ?? 1;
    $username = $_POST['username'] ?? ''; 

    $product_price = str_replace(',', '', $product_price);

    $sql = "INSERT INTO orders (product_name, product_price, product_color, product_quantity, username) 
            VALUES (:product_name, :product_price, :product_color, :product_quantity, :username)";
    
    $stmt = $pdo->prepare($sql);
    
    $stmt->bindParam(':product_name', $product_name);
    $stmt->bindParam(':product_price', $product_price);
    $stmt->bindParam(':product_color', $product_color);
    $stmt->bindParam(':product_quantity', $product_quantity, PDO::PARAM_INT);
    $stmt->bindParam(':username', $username);
    
    $stmt->execute();
    
    echo 'Order placed successfully!';
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}
?>

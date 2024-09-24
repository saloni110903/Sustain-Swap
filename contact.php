<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "shopping_app"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    header("Location: contact.html?success=1");
} 
else {
    header("Location: index.html?error=1");
}
$stmt->close();
$conn->close();
?>
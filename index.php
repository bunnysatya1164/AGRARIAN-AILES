<?php
$servername = "localhost";
$username = "Agrarian_aisles";
$password = "farm2customers";

try {
    $conn = new PDO("mysql:host=$servername;dbname=your_database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>

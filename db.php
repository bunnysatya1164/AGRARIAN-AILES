<?php
// Database configuration
define('DB_SERVER', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', ''); // Set your actual MySQL root password here, leave empty if no password
define('DB_NAME', 'signin');
define('DB_PORT', 3307); // Ensure this matches your MySQL configuration

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
} catch (Exception $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}
?>

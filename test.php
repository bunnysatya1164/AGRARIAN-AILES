<?php
// Database configuration
define('DB_SERVER', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', ''); // Set your actual MySQL root password here if required
define('DB_NAME', 'signin');
define('DB_PORT', 3307); // Ensure this matches your MySQL configuration

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Attempt to connect to MySQL database
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);

// Check the connection
if ($conn->connect_error) {
    die("ERROR: Could not connect. " . $conn->connect_error);
} else {
    echo "Successfully connected to the database!";
}

// Close the connection
$conn->close();
?>

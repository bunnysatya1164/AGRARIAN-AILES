<?php

session_start();

// Destroy session data
session_destroy();

echo "<script>alert('Logout successful!');</script>";
header("Location: login.php"); // Redirect to login page

?>

<?php
session_start();

// Include the database connection file
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Prepare the SQL statement with parameter binding
  $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
  $stmt->bind_param('s', $username);
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
      $_SESSION['loggedIn'] = true;
      $_SESSION['username'] = $username;
      echo json_encode(['status' => 'success']);
    } else {
      echo json_encode(['status' => 'error', 'message' => 'Invalid username or password']);
    }
  } else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid username or password']);
  }
  $stmt->close();
  $conn->close();
  exit;
}
?>

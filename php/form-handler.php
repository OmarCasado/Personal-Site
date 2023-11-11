<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "omarcasado27@hotmail.com";

    $subject = "New Form Submission";

    // Build email message
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $email\r\n";

    // Use the mail() function to send the email
    $success = mail($to, $subject, $body, $headers);

    // Check if the email was sent
    if ($success) {
        echo "Thank you for your time!";
    } else {
        echo "Error sending the email. Please try again later.";
    }
} else {
    // If the form is not submitted, redirect to the form page
    header("Location: index.html");
    exit();
}


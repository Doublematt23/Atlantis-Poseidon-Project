<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sender_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    // Email to Matthew
    $to = 'Matthewkaukialo@gmail.com';
    $subject = 'New Contact Us Message';
    $body = "You have received a new message from: $sender_email\n\n" . $message;
    $headers = "From: $sender_email";
    mail($to, $subject, $body, $headers);
    
    // Automatic response to the sender
    $autoRespondTo = $sender_email;
    $autoRespondSubject = "Your email has been received";
    $autoRespondMessage = "Your email has been received. An Atlantis Representative will contact you within 1-5 business days.";
    $autoRespondHeaders = "From: Matthewkaukialo@gmail.com";
    mail($autoRespondTo, $autoRespondSubject, $autoRespondMessage, $autoRespondHeaders);
    
    echo "Your message has been sent. Thank you for contacting us.";
    // Optionally, redirect back to a thank you page or the home page
    // header('Location: thank_you.html');
}
else {
    // Not a POST request, redirect to the form or show an error
    echo "Error: Form not submitted correctly.";
}
?>

<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: agriindiaexp.com'; 
    $to = 'pablofveiga@gmail.com'; 
    $subject = 'Contacto desde pablofv';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) { 
           $success = "Message successfully sent";
        } else {
            $success = "Message Sending Failed, try again";
        }
    }
?>
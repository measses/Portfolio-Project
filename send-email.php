<?php

$name = $_POST['name'];
$email = $_POST['email'];
$about = $_POST['about'];
$phone = $_POST['phone'];
$message = $_POST['message'];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP; 
$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = 'smtp.gmail.com';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = 'you@gmail.com';
$mail->Password = 'password';

$mail->setFrom($email, $name);
$mail->addAddress("mertaraz7@gmail.com", "Mert");

$mail->Subject = $about;
$mail->Body = $message;

$mail->send();
echo "Mail sent";
?>

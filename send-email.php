<?php
use PHPMailer\PHPMailer\PHPMailer;
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'vendor/autoload.php'; // PHPMailer'ın dahil olduğu composer autoload dosyasını dahil edin

    $name = $_POST['name'];
    $email = $_POST['mail'];
    $phone = $_POST['phone'];
    $about = $_POST['about'];
    $message = $_POST['message'];

    echo smtp_mailer('mertoreyiz1907@gmail.com', $about, "Ad Soyad: $name<br>E-Mail: $email<br>Telefon: $phone<br>Mesaj: $message");
}

function smtp_mailer($to, $subject, $msg)
{
    require 'vendor/phpmailer/phpmailer/src/PHPMailerAutoload.php'; // PHPMailer sınıfını dahil et

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    //$mail->SMTPDebug = 2; 
    $mail->Username = "mertarazyedek23@gmail.com";
    $mail->Password = "pwekiikavtksxelc";
    $mail->setFrom('mertarazyedek23@gmail.com', 'Mert Araz');
    $mail->Subject = $subject;
    $mail->Body = $msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = array('ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => false
    ));
    if (!$mail->Send()) {
        echo $mail->ErrorInfo;
    } else {
        return 'Sent';
    }
}
?>

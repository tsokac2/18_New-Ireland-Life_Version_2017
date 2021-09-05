<?php
$to = 'newirelandlife@gmail.com';
$subject ='Novi upit, preporuka, kritika, pohvala';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$body = <<<EMAIL

Hi! My name is $name.

$message

From $name

My e-mail is $email

EMAIL;

$header = "From $email";

if ($_POST) {

    mail($to, $subject, $body, $header);
    $feedback = "Poruka je poslana";

}

?>
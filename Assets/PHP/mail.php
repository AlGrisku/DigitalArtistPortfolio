<?php 

$name = &_POST['name'];
$email = &_POST['email'];
$message = &_POST['message'];
$subject = "New message from contact form"

$mailHeader = "From: " .$name. "<" .$email. ">\r\n";

$recipient = "yashiira.contact@gmail.com";

mail($recipient, $subject, $message, $mailHeader);
or die("Error!");

echo '

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/Assets/CSS/stylesheet.css">
    <link rel="stylesheet" href="/Assets/CSS/stylesheet-contact.css">
    <link rel="icon" href="/Assets/Media/Icons/Yashiira Logo Black.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800&display=swap" rel="stylesheet">

    <title>We received your message!</title>
</head>

<body>

    <section id="received">
        <div class="container received">

            <div class="wrapper">
                <h1>Thank you very much for your message!</h1>
                <p>I will make sure to contact you as soon as I can!</p>
                <a href="/index.html" class="cta">Back Home</a>
            </div>

        </div>
    </section>

</body>
</html>

';

?>
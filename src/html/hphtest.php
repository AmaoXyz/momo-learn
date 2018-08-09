<?php

    header('Content-Type: application/json');
    header('Content-Type: text/html;charset=utf-8');

    $email = $_GET['email'];

    echo $_GET['callback']."(".$email.")";
?>
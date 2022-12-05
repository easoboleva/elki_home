<?php
header("Access-Control-Allow-Origin: *");
session_start();
$url = explode("/", $_SERVER['REQUEST_URI']);
require_once("php/bd.php");
require_once("php/User.php");

if ($url[1] == "addUser") {
  echo User::addUser($_POST["name"], $_POST["tel"]);
} else {
  $content = file_get_contents("/index.html");
}

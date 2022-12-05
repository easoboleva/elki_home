<?php

class User
{
  private $name;
  private $tel;
  private $id;

  function __construct($id, $name, $tel)
  {
    $this->id = $id;
    $this->name = $name;
    $this->tel = $tel;
  }

  function getId()
  {
    return $this->id;
  }
  function getName()
  {
    return $this->name;
  }
  function getTel()
  {
    return $this->tel;
  }

  //*Статический метод добавления заявки от пользователя
  static function addUser($name, $tel)
  {
    global $mysqli;

    $tel = trim(mb_strtolower($tel));

    $result = $mysqli->query("SELECT * FROM `users` WHERE `tel`='$tel'");
    if ($result->num_rows != 0) {
      return json_encode(["result" => "exist"]);
    } else {
      $mysqli->query("INSERT INTO `users`(`name`, `tel`) VALUES ('$name', '$tel')");
      return json_encode(["result" => "success"]);
    }
  }
}

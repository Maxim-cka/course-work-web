<?php
  $mysqli = false;
  function connectDB () {
      global $mysqli;
      $mysqli = new mysqli("localhost", "root", "", "Kyrsova" );
      if ($mysqli == false){
        print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        print("Соединение установлено успешно");
    }
      $mysqli ->query("SET NAMES 'utf-8");
  }

  function closeDB (){
      global $mysqli;
      $mysqli ->close ();
  }

  $mysqli = mysqli_connect("localhost", "root", "");

  $sql = 'INSERT INTO Тварини SET name = "Бульдог"';
$result = mysqli_query($mysqli, $sql);

if ($result == false) {
    print("Произошла ошибка при выполнении запроса");
}
?>



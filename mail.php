<?php
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

function test_form($obj) {
  $obj = trim($obj);
  $obj = stripslashes($obj);
  $obj = strip_tags($obj);
  $obj = htmlspecialchars($obj);
  return $obj;
}
    $name = test_form($_POST['name']);
    $phone = test_form($_POST['phone']);
    $street = test_form($_POST['street']);
    $home = test_form($_POST['home']);
    $housing= ' корп.'.test_form($_POST['housing']);
    $apartment = test_form($_POST['apartment']);
    $floor = test_form($_POST['floor']);
    $comment = test_form($_POST['comment']);
    $card = $_POST['card'];
    $callback = $_POST['callback'];
    $disturb = isset($callback) ? 'НЕТ' : 'ДА';

    $address = 'ул.'.$street.' д.'.$home.$housing.' кв.'.$apartment.' эт.'.$floor;
    if ($card == 1){
      $card = "Потребуется сдача";
    } else {
      $card = "Оплата по карте";
    }
    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: '. $name .'</li>
                <li>Номер телефона: <strong>'. $phone .'</strong></li>
                <li>Адрес: <strong>'. $address .'</strong></li>
                <li>Способ оплаты: '. $card .'</li>
                <li>Комментарии к заказу: '. $comment .'</li>
                <li>Комментарии к заказу: '. $comment .'</li>
                <li>Нужно ли перезванивать клиенту: '. $disturb .'</li>
            </ul>
        </body>
    </html>
    ';
    $headers = "From: Администратор сайта <admin@mrburger.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('welikodub@gmail.com', 'Заказ бургеров', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
    echo json_encode($data);
}
?>

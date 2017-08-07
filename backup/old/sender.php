<?php
$tosend = "Webfoxkem@mail.ru"; //To:
$subject = "Продажа шиномонтажного оборудования с доставкой по России"; //Subject:
$from_name = "Центр Технического Оборудования"; //From:
$from_email = "email@email.com"; //From:

////NO EDIT
if(!isset($_POST['act'])) {
	exit();
}
switch($_POST['act']) {
	case 'sender':
		if(empty($_POST['name']) || empty($_POST['phone'])) {
			exit();
		}
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];
		$variant = $_POST['variant'];
		$stanok = $_POST['stanok'];
		$value1 = $_POST['value1'];
		$value2 = $_POST['value2'];
		$moshchnost = $_POST['moshchnost'];
		$diameter = $_POST['diameter'];
		$balansirovochnyj = $_POST['balansirovochnyj'];
		$type = $_POST['type'];
		$value3 = $_POST['value3'];
		$motor = $_POST['motor'];
		$kompressor = $_POST['kompressor'];
		$subj = $_POST['subject'];
		$timezone = $_POST['timezone'] - 6; //nsk
		$timezone = ($timezone >= 0) ? "+".$timezone : $timezone;
		
		$msg  = "<p><strong>".$subj."</strong></p>\r\n";
		if($stanok != '' && $stanok != 'undefined') $msg .= "<p><strong>".$stanok.":</strong> ".$value1."; ".$value2."; ".$moshchnost."; ".$diameter." </p>\r\n";
		if($balansirovochnyj != '' && $balansirovochnyj != 'undefined') $msg .= "<p><strong>".$balansirovochnyj."</strong>: ".$type."; ".$value3."; ".$motor." </p>\r\n";
		if($kompressor != '' && $kompressor != 'undefined') $msg .= "<p><strong>".$kompressor."</strong> </p>\r\n";
		if($name != '' && $name != 'undefined') $msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
		$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
		if($email != '' && $email != 'undefined')$msg .= "<p><strong>E-mail:</strong> ".$email."</p>\r\n";
		if($variant != '' && $variant != 'undefined')$msg .= "<p><strong>У Вас уже есть бизнес?: </strong> ".$variant."</p>\r\n";
		$msg .= "<hr><br><br>\r\n";
		$msg .= "<p><strong>ГЕО<br>Город через Яндекс:</strong> ".$_POST['yacity']."</p>\r\n";

		//geo_ip
		$ip = $_SERVER['REMOTE_ADDR'];
		$geo_info = "IP: ".$ip."\n";
		include('./geo.php');
		$o = array();
		$o['ip'] = $ip;
		$o['charset'] = 'utf-8';
		$geo = new Geo($o);
		$gdata = $geo->get_value(false, false);
		$geo_info .= "Страна: ".$gdata['country']."\n";
		$geo_info .= "Город: ".$gdata['city']."\n";
		$geo_info .= "Регион: ".$gdata['region']."\n";
		$geo_info .= "Район: ".$gdata['district']."\n";
		
		//utm
		include('./utm_sel.php');
		$msg .= "<p><strong>UTM:</strong><br>\r\n ".nl2br($utms)."</p>\r\n<p>ГЕО:\n ".$geo_info."</p>";

		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
		$headers .= "From: =?UTF-8?B?".base64_encode($from_name)."?= <".$from_email.">\r\n";

		if(mail($tosend, "=?UTF-8?B?".base64_encode($subject)."?=", $msg, $headers)) {
			echo json_encode(array('result' => 'ok'));
		} else {
			echo json_encode(array('result' => 'fail'));
		}
	break;
	default: exit();
}
?>
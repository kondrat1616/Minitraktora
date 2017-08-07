	$(document).ready(function() {
		
	//form
	$('.pop-up').click(function(e) {
		e.preventDefault();	
		$('form').trigger('reset');
		var text = $(this).attr('data-head');
			var subjectText = $(this).attr('data-subject');
			var btn = $(this).attr('data-btn');
		$('#myModal .modal-title').html(text);
		$('#myModal input[name=subject]').val(subjectText);
		$('#myModal form  button').html(btn);
		
	});
	
	$('.sform').submit(function(event) {	
		event.preventDefault();
		var pForma = $(this);

		if(pForma.find('input[name=name]').val() == '') {
			pForma.find('input[name=name]').focus();
			return false;
		}
		
		if(pForma.find('input[name=phone]').val() == '') {
			pForma.find('input[name=phone]').focus();
			return false;
		}
		
							
		$('#myModal').removeClass('fade')
		var timezone = -(new Date().getTimezoneOffset()) / 60;
		var yacity = $('#ya-city').val();
		var f = $(this);
		var name = $('input[name=name]', f).val();
		var phone = $('input[name=phone]', f).val();
		var email = $('input[name=email]', f).val();
		var subject = $('input[name=subject]', f).val();
		var variant = $('select[name=variant]', f).val();
		var kompressor = $('input[name=kompressor]:checked', f).val();
		
if($('input[name=stanok]').prop('checked')) {
var stanok = $('input[name=stanok]:checked', f).val();
var value1 = $('input[name=value1]', f).val();
var value2 = $('input[name=value2]', f).val();
var moshchnost = $('select[name=moshchnost]', f).val();
var diameter = $('select[name=diameter]', f).val();	
}
if($('input[name=balansirovochnyj]').prop('checked')) {
var balansirovochnyj = $('input[name=balansirovochnyj]:checked', f).val();
var type = $('select[name=type]', f).val();
var value3 = $('input[name=value3]', f).val();
var motor = $('select[name=motor]', f).val();
}
		
		var query = 'act=sender';
			query += '&name=' + encodeURIComponent(name);
			query += '&phone=' + encodeURIComponent(phone);
			query += '&email=' + encodeURIComponent(email);
			query += '&variant=' + encodeURIComponent(variant);	
			query += '&kompressor=' + encodeURIComponent(kompressor);
			query += '&stanok=' + encodeURIComponent(stanok);
			query += '&value1=' + encodeURIComponent(value1);
			query += '&value2=' + encodeURIComponent(value2);
			query += '&moshchnost=' + encodeURIComponent(moshchnost);
			query += '&diameter=' + encodeURIComponent(diameter);
			query += '&balansirovochnyj=' + encodeURIComponent(balansirovochnyj);
			query += '&type=' + encodeURIComponent(type);
			query += '&value3=' + encodeURIComponent(value3);
			query += '&motor=' + encodeURIComponent(motor);			
			query += '&subject=' + encodeURIComponent(subject);
			query += '&yacity=' + encodeURIComponent(yacity);
			query += "&timezone=" + encodeURIComponent(timezone);		

		$.ajax({
			type: "POST",
			data: query,
			url: "./sender.php",
			dataType: "json",
			success: function(data) {
				if(data.result == 'ok') {
					$('form').trigger('reset');				
					//echo
			$('#myModal').modal('hide')
$('#myModalOk').modal('show')
$('#myModal').addClass('fade')
				setTimeout("$('#myModalOk').modal('hide')", 5000);
				} else {
					alert('Ошибка! Повторите позже.');
				}
			}
		});
		return false;
	});

		//ya.city
	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation;
		$('#ya-city').val(geolocation.city);
	}

	
	});
function CheckBoxChecker()
	{
		var tireCheckBox = document.getElementById("TireCheckBox");
		var firstBoxItems = document.getElementsByClassName("firstBoxItems")
		if(tireCheckBox.checked==true)
			{
				for(var i = 0; i<firstBoxItems.length; i++)
					{
						firstBoxItems[i].disabled=true;
					}
			}else{
				for(var i = 0; i<firstBoxItems.length; i++)
					{
						firstBoxItems[i].disabled=false;
					}
			}
	}
function CheckBoxChecker2()
	{
		var BalanceCheckBox = document.getElementById("BalanceCheckBox");
		var balanceBoxItems = document.getElementsByClassName("balanceBoxItems")
		if(BalanceCheckBox.checked==true)
			{
				for(var i = 0; i<balanceBoxItems.length; i++)
					{
						balanceBoxItems[i].disabled=true;
					}
			}else{
				for(var i = 0; i<balanceBoxItems.length; i++)
					{
						balanceBoxItems[i].disabled=false;
					}
			}
	}
function CheckBoxChecker3()
{
	
}
	$(document).ready(function() {

//mask
$(".phone-mask").mask("9 (999) 999-99-99");
		

	
		$('.regionCity').click(function(e) {
		e.preventDefault();	
		$('.city-p').text($(this).text())
		location.href="#close"
		return false
		})
		
			$('.search-city-submit').click(function(e) {
		e.preventDefault();	
		
				
		if($('#search-city').val()==''){
			$('#search-city').focus();
			return false;
		}
		
		var locat = $('#search-city').val();
$.post( './city.php', {dat:locat}, success);
function success(msg)   {
	
if(msg!=$('#search-city').val().toLowerCase()){
	alert('Ошибка! Введите правильное название города.')
		return false;
}
else{
$('.city-p').text($('#search-city').val());
location.href="#close"
}

}

		})	
		

		
			
	$('.sform').submit(function(event) {	
		event.preventDefault();
		var pForma = $(this);

		
		if(pForma.find('input[name=phone]').val() == '') {
			pForma.find('input[name=phone]').focus();
			return false;
		}
		
		var timezone = -(new Date().getTimezoneOffset()) / 60;
		var yacity = $('#ya-city').val();
		var f = $(this);
		var name = $('input[name=name]', f).val();
		var phone = $('input[name=phone]', f).val();
		var email = $('input[name=email]', f).val();
		var subject = $('input[name=subject]', f).val();
		var variant = $('select[name=variant]', f).val();	
		var catName = $('input[name=catName]', f).val();
		var catName2 = $('input[name=catName2]', f).val();
		
if($('input[name=stanok]').prop('checked')) {
var stanok = $('input[name=stanok]:checked', f).val();
var value1 = $('input[name=value1]:checked', f).val();
var value2 = $('input[name=value2]:checked', f).val();
var value3 = $('input[name=value3]:checked', f).val();
var razmerdiska = $('select[name=razmerdiska]', f).val();
var brendi = $('select[name=brendi]', f).val();	
}
if($('input[name=balansirovochnyj]').prop('checked')) {
var balansirovochnyj = $('input[name=balansirovochnyj]:checked', f).val();
var value4 = $('input[name=value4]:checked', f).val();
var value5 = $('input[name=value5]:checked', f).val();
var value6 = $('input[name=value6]:checked', f).val();
var motor = $('select[name=motor]', f).val();
var brendi2 = $('select[name=brendi2]', f).val();
}
if($('input[name=kompressor').prop('checked')) {
var kompressor = $('input[name=kompressor]:checked', f).val();
var value7 = $('input[name=value7]:checked', f).val();
var razmerresivera = $('select[name=razmerresivera]', f).val();
var proizvoditelnost = $('select[name=proizvoditelnost]', f).val();
var davlenie = $('select[name=davlenie]', f).val();
var brendi3 = $('select[name=brendi3]', f).val();
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
			query += '&balansirovochnyj=' + encodeURIComponent(balansirovochnyj);
			query += '&value3=' + encodeURIComponent(value3);
			query += '&motor=' + encodeURIComponent(motor);			
			query += '&subject=' + encodeURIComponent(subject);
			query += '&yacity=' + encodeURIComponent(yacity);
			query += "&timezone=" + encodeURIComponent(timezone);		
			query += '&catName=' + encodeURIComponent(catName);
			query += '&catName2=' + encodeURIComponent(catName2);
			query += "&razmerdiska=" + encodeURIComponent(razmerdiska);
			query += "&brendi=" + encodeURIComponent(brendi);
			query += '&value4=' + encodeURIComponent(value4);
			query += '&value5=' + encodeURIComponent(value5);
			query += '&value6=' + encodeURIComponent(value6);
			query += "&brendi2=" + encodeURIComponent(brendi2);
			query += '&value7=' + encodeURIComponent(value7);
			query += "&razmerresivera=" + encodeURIComponent(razmerresivera);
			query += "&proizvoditelnost=" + encodeURIComponent(proizvoditelnost);
			query += "&davlenie=" + encodeURIComponent(davlenie);
			query += "&brendi3=" + encodeURIComponent(brendi3);

		$.ajax({
			type: "POST",
			data: query,
			url: "./sender.php",
			dataType: "json",
			success: function(data) {
				var urlCto = "http://centr-to.ru/o-kompanii";
				if(data.result == 'ok') {
					$('form').trigger('reset');
					
					ga('send', 'event', 'Knopka', 'cel1');
			

					setTimeout($(location).attr('href',urlCto), 5000);
					//echo
location.href="#close";
location.href="#openModalOk";
$('.firstBoxItems,.balanceBoxItems').prop('disabled', true)
				setTimeout("location.href='#close'", 5000);
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
		$('.city-p').text(geolocation.city)	
	}
	
    $('#search-city').autocomplete({
                source: 'city.php',
				minLength: 2
    })	

	
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
						firstBoxItems[i].checked=false;
						if(firstBoxItems[i].nodeName === "SELECT")
							{
								$(firstBoxItems[i]).wrap("<span class='inactive'></span>");
							}
					}
			}else{
				for(var i = 0; i<firstBoxItems.length; i++)
					{
						firstBoxItems[i].disabled=false;
						if($(firstBoxItems[i]).parent().is('span'))
							{
								
								$(firstBoxItems[i]).unwrap();
							}
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
						balanceBoxItems[i].checked=false;
						if(balanceBoxItems[i].nodeName === "SELECT")
							{
								$(balanceBoxItems[i]).wrap("<span class='inactive'></span>");
							}
					}
			}else{
				for(var i = 0; i<balanceBoxItems.length; i++)
					{
						balanceBoxItems[i].disabled=false;
						if($(balanceBoxItems[i]).parent().is('span'))
							{
								
								$(balanceBoxItems[i]).unwrap();
							}
					}
			}
	}
function CheckBoxChecker3()
{
	var CompressorCheckBox = document.getElementById("CompressorCheckBox");
		var compressorBoxItems = document.getElementsByClassName("compressorBoxItems")
		if(CompressorCheckBox.checked==true)
			{
				for(var i = 0; i<compressorBoxItems.length; i++)
					{
						compressorBoxItems[i].disabled=true;
						compressorBoxItems[i].checked=false;
						if(compressorBoxItems[i].nodeName === "SELECT")
							{
								$(compressorBoxItems[i]).wrap("<span class='inactive'></span>");
							}
					}
			}else{
				for(var i = 0; i<compressorBoxItems.length; i++)
					{
						compressorBoxItems[i].disabled=false;
						if($(compressorBoxItems[i]).parent().is('span'))
							{
								
								$(compressorBoxItems[i]).unwrap();
							}
					}
			}
}
function CatNameChanger(catName)
{
var	modalText = document.getElementById("catalogName");
var cNameInputValue = document.getElementById("cNameId");
	modalText.innerHTML= catName;
	cNameInputValue.value = catName;

}
function CatNameChanger2(catName2)
{
var	modalText = document.getElementById("catalogName2");
var cNameInputValue = document.getElementById("cNameId2");
	modalText.innerHTML= catName2;
	cNameInputValue.value = catName2;

}
function CalcFieldChecker(e)
{
	//var eAttr = e.getAttribute("id");
	
	
	if(e.nodeName==undefined){
	var jqAttr = e.attr("id");	
	}
	

	if(e.id == "scol" || jqAttr == "scol")
	{
	var tireBlock = document.getElementById("TireCheckBox");
	if(tireBlock.checked==false)
		{   
			CheckBoxChecker();
			tireBlock.checked=true;
			
		}
	}
		if(e.id == "bcol" || jqAttr == "bcol")
		{
			var balanceChckbx = document.getElementById("BalanceCheckBox");
			if(balanceChckbx.checked==false)
			{
				CheckBoxChecker2();
				balanceChckbx.checked=true;
			}
	
	}
		if(e.id == "kcol" || jqAttr == "kcol")
		{
			var kompressChckbx = document.getElementById("CompressorCheckBox");	
			if(kompressChckbx.checked==false)
			{
				CheckBoxChecker3();
				kompressChckbx.checked=true;
			}
	       
	}
	
}

//Валидация телефонного номера
//Текст в span(снизу)
function validation(win,inputf) {
	var novalid;
	var invalidinputText = document.getElementById(win);
    var phone_pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    var phone = document.getElementById(inputf).value;
    if (phone_pattern.test(phone) == false ){
					novalid = "*Номер введен некорректно!";
					invalidinputText.innerHTML = novalid;
					document.getElementById(inputf).style.boxShadow = "inset 0 0 5px 5px #fcd63f";
		}
	else{
		invalidinputText.innerHTML = "";
		document.getElementById(inputf).style.boxShadow = "none";
	}
}

function validation2(win,inputf) {
	var novalid;
	var invalidinputText = document.getElementById(win);
    var phone_pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    var phone = document.getElementById('inputf').value;
    if (phone_pattern.test(phone) == false ){
					novalid = "*Номер введен некорректно!";
					invalidinputText.innerHTML = novalid;
					document.getElementById(inputf).style.boxShadow = "inset 0 0 5px 5px #fe475a";
		}
	else{
		invalidinputText.innerHTML = "";
		document.getElementById(inputf).style.boxShadow = "none";
	}
}

    $('#select_col_1 *').filter(':input').each(function(){        
        if($(this).attr('disabled') == "disabled"){
            $(this).wrap("<span id='scol' class='inactive'></span>"); 
        };
    });
    

        $('#select_col_2 *').filter(':input').each(function(){        
        if($(this).attr('disabled') == "disabled"){
            $(this).wrap("<span id='scol' class='inactive'></span>"); 
        };
    });
    

        $('#select_col_3 *').filter(':input').each(function(){        
        if($(this).attr('disabled') == "disabled"){
            $(this).wrap("<span id='bcol' class='inactive'></span>"); 
        };
    });
    
 
        $('#select_col_4 *').filter(':input').each(function(){        
        if($(this).attr('disabled') == "disabled"){
            $(this).wrap("<span id='bcol' class='inactive'></span>"); 
        };
    });
    

        $('#select_col_5 *').filter(':input').each(function(){        
        if($(this).attr('disabled') == "disabled"){
            $(this).wrap("<span id='kcol' class='inactive'></span>"); 
        };
    });
    


        $('#select_col_6 *').filter(':input').each(function(){        
        if($(this).attr('disabled') == "disabled"){
            $(this).wrap("<span id='kcol' class='inactive'></span>"); 
        };
    });
    


        $('#select_col_7 *').filter(':input').each(function(){        
        if($(this).attr('disabled') == "disabled"){
            $(this).wrap("<span id='kcol' class='inactive'></span>"); 
        };
    });
    
 
        $('#select_col_8 *').filter(':input').each(function(){        
        if($(this).attr('disabled') == "disabled"){
            $(this).wrap("<span id='kcol' class='inactive'></span>"); 
        };
    });
    
    $(document).on('click', '.inactive', function(){
        
		CalcFieldChecker($(this).children("select"));
       $(this).removeClass('inactive');
    });
	
function moveCaretToStart(inputObject)
  {
   if (inputObject.selectionStart)
{
 inputObject.setSelectionRange(0,0);
 inputObject.focus();
}
    
  }
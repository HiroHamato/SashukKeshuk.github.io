
let tg = window.Telegram.WebApp;

tg.expand();

btn1 = document.getElementById('btn3');
btn2 = document.getElementById('btn4');

let cost_from = 94000,cost_to = 1236000;

$("#slider2").ionRangeSlider({
    type: "double",
    skin:"round",
    min: 125000,
    max: 550000,
    from: 125000,
    to: 550000,
    step: 1000,
    onFinish: function (data) {
    		cost_from=data.from;
    		cost_to=data.to;
    },

});

$("#slider1").ionRangeSlider({
    type: "double",
    skin:"round",
    min: 94000,
    max: 1236000,
    from: 94000,
    to: 1236000,
    step: 1000,
    onFinish: function (data) {
    		cost_from=data.from;
    		cost_to=data.to;
    },

});

active = 1;
$(".inner").appendTo($(".container"));
let p = $(".inner2");


function ChangeTo2(){
	active = 1;
	//inner1.ClassList.add('move')
	p.fadeOut(1);
	p.appendTo($(".container"));
	p.fadeIn(1500);
	p = $(".inner2").detach();
	console.log(p);
	console.log(active);
}
function ChangeTo1(){
	active = 2;
	p.fadeOut(1);
	p.appendTo($(".container"));
	p.fadeIn(1500);
	p = $(".inner").detach();
	console.log(p);
	console.log(active);
}


function SendData(){
	let data='';
	if (active==1)
	{
		data+='new_building ';
		data+=cost_from+' '+cost_to+' ';
		if (document.getElementById("el1").checked==1) data+='Alanya ';
		if (document.getElementById("el2").checked==1) data+='Istanbul ';
		if (document.getElementById("el3").checked==1) data+='Antalya ';
		if (document.getElementById("el4").checked==1) data+='Izmir ';
		if (document.getElementById("el5").checked==1) data+='apartment ';
		if (document.getElementById("el6").checked==1) data+='villa ';
		if (document.getElementById("el7").checked==1) data+='1+1 ';
		if (document.getElementById("el8").checked==1) data+='2+1 ';
		if (document.getElementById("el9").checked==1) data+='3+1 ';
		if (document.getElementById("el10").checked==1) data+='4+1 ';
		if (document.getElementById("el11").checked==1) data+='5+1 ';
		if (document.getElementById("el12").checked==1) data+='1.5+1 ';
		if (document.getElementById("el13").checked==1) data+='6+1 ';
		if (document.getElementById("el14").checked==1) data+='3.5+1 ';
		if (document.getElementById("el15").checked==1) data+='7+1 ';
	} else {
		data+='from_the_owner ';
		data+=cost_from+' '+cost_to+' ';
		if (document.getElementById("ell1").checked==1) data+='Alanya ';
		if (document.getElementById("ell2").checked==1) data+='apartment ';
		if (document.getElementById("ell3").checked==1) data+='villa ';
		if (document.getElementById("ell4").checked==1) data+='1+1 ';
		if (document.getElementById("ell5").checked==1) data+='2+1 ';
		if (document.getElementById("ell6").checked==1) data+='3+1 ';
	}
	console.log(data);
	tg.sendData(data);
}
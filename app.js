
let tg = window.Telegram.WebApp;

tg.expand();

btn1 = document.getElementById('btn3');
btn2 = document.getElementById('btn4');



$("#slider2").ionRangeSlider({
    type: "double",
    skin:"round",
    min: 125000,
    max: 550000,
    from: 125000,
    to: 550000,
    step: 1000,
    onFinish: function (data) {
         /*  console.log ('Начальное значение:' + data.from)
           console.log ('Конечное значение:' + data.from)*/
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
         /*  console.log ('Начальное значение:' + data.from)
           console.log ('Конечное значение:' + data.from)*/
    },

});

active = 1;
$(".inner").appendTo($(".container"));
let p = $(".inner2");


function ChangeTo2(){
	active = 2;
	//inner1.ClassList.add('move')
	p.fadeOut(1);
	p.appendTo($(".container"));
	p.fadeIn(1500);
	p = $(".inner2").detach();
	console.log(p);
	console.log(active);
}
function ChangeTo1(){
	active = 1;
	p.fadeOut(1);
	p.appendTo($(".container"));
	p.fadeIn(1500);
	p = $(".inner").detach();
	console.log(p);
	console.log(active);
}
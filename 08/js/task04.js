( function () {
'use strict';
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var count = document.getElementById("count");
var num = 0;

btn1.onclick = countClick;
btn2.onclick = countClick;

function countClick () {
	num++;
	count.value = num;
};




} )();
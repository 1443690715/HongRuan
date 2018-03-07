window.onload=init;

function init(){
	var online=document.getElementById("show-classify-online");
	var offline=document.getElementById("show-classify-offline");
	var QRcode=document.getElementById("mobile-pic");
	var hiddenclass=document.getElementsByClassName("hidden-class");
	show(online);
	show(offline);
	showpic(QRcode);
	hiddenpic(QRcode);
	for(var i=0;i<hiddenclass.length;i++){
		hidden(hiddenclass[i]);
	}
	myFocus.set({
    id:"menu-bgpic",
    loadIMGTimeout:"0"
	})
}
function show(obj){
	obj.onmouseover=function(){
		document.getElementById("menu-list-classify").style.display="block";
	}
}
function hidden(obj){
	obj.onmouseout=function(){
		document.getElementById("menu-list-classify").style.display="none";
	}
}
function showpic(obj){
	obj.onmouseover=function(){
		document.getElementById("mobilepic").style.display="block";
	}
}
function hiddenpic(obj){
	obj.onmouseout=function(){
		document.getElementById("mobilepic").style.display="none";
	}
}
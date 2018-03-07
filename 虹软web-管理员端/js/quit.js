window.onload=init;

function init(){
	var navpic=document.getElementById("nav-pic");
	var navquit=document.getElementById("nav-quit");
	show(navpic);
	hidden(navpic);
}
function show(obj){
	obj.onmouseover=function(){
		document.getElementById("nav-quit").style.display="block";
	}
}
function hidden(obj){
	obj.onmouseout=function(){
		document.getElementById("nav-quit").style.display="none";
	}
}
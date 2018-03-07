window.onload=function() {
	var myLiArr=document.getElementsByClassName('myLi');
	for(var i=0;i<myLiArr.length;i++){
		myLiArr[i].onclick=function(){
			document.getElementById("mytext").value=this.innerText;
		}
	}
}
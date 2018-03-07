var hour=1;
	var minute=0;
	var second=0;
	var time=window.setInterval(getTime,1000);
	document.getElementById("test-time").innerHTML="考试剩余时间：:0"+hour+":0"+minute+":0"+second;
	function getTime(){
		second--;
		if(second<0){
			second=59;
			minute--;
		}
		if(minute<0){
			minute=59;
			if(hour>=1){
				hour--;
			}else{
				hour=0;
		}
	}

	function setformat(arg){
		if(arg<10){
			reset="0"+arg;
		}else{
			reset=arg;
		}
		return reset;
	}
	var myhour=setformat(hour);
	var myminute=setformat(minute);
	var mysecond=setformat(second);
	document.getElementById("test-time").innerHTML="考试剩余时间："+myhour+":"+myminute+":"+mysecond;
}
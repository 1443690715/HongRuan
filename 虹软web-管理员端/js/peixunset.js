window.onload=function() {
	//搜索课程：
	var myLiArr=document.getElementsByClassName('myLi');
	for(var i=0;i<myLiArr.length;i++){
		myLiArr[i].onclick=function(){
			document.getElementById("mytext").value=this.innerText;
		}
	}


	//左导航栏：
	  var goleft=document.getElementById("mylist-group-item");
	  var myspan=document.getElementById("myspan");
	  var leftContainer=document.getElementById("leftContainer");
	  var items=document.getElementsByClassName("list-group-item");
	  var itemstext=new Array(items.length);
	  var itemsTextIndent=new Array(items.length);
	  var open="1";
	  var leftContainer2 = $("#leftContainer");
	  var myrow = $("#myrow");
	  var col = $(".col-md-9");
	  myrow.height(col.height());
	  leftContainer2.height(myrow.height());
	  for(var i=1;i<items.length;i++){
	    itemstext[i]=items[i].innerHTML;
	    itemsTextIndent=items[i].style.textIndent;
	      }
	  // alert(document.body.clientWidth);
	  // alert(items[0].style.width);
	  // alert(leftContainer.style.width);
	  goleft.onclick=function(){
	   
	    if(open=="1"){
	      // alert("11111111");
	      myspan.className="glyphicon glyphicon-hand-right";
	      items[0].style.textAlign="left";
	      items[0].style.width="50px";
	      items[0].style.textIndent="4px";
	      for(var i=1;i<items.length;i++){
	        items[i].innerHTML='<span class="glyphicon glyphicon glyphicon-cd center-block"></span>';
	        items[i].style.textIndent="5px";
	         items[i].style.backgroundColor="#333333";
	        items[i].style.width="50px";
	        leftContainer.style.width="50px";
	      }
	      open="0";
	    }
	    else if(open=="0"){
	      myspan.className="glyphicon glyphicon-hand-left";
	      items[0].style.textIndent="25px";
	      items[0].style.width="150px";
	      for(var i=1;i<items.length;i++){
	        items[i].innerHTML=itemstext[i];
	        items[i].style.textIndent=itemsTextIndent;
	        items[i].style.width="150px";
	        leftContainer.style.width="150px";
	      }
	      open="1";
	      // alert(open);

	    }
	  }


	  //删除学员记录：
	  function deleteXueYuan(){
		    var deleteBtnArr=document.getElementsByClassName("deleteBtn");
		    for(var i=0;i<deleteBtnArr.length;i++){
		    	deleteBtnArr[i].onclick=function(){
		    		$(this).closest('tr').remove();
		    		// alert($('tbody').children('tr').length);
		    		var mynumArr=document.getElementsByClassName("mynum");
		    		for(var j=0;j<mynumArr.length;j++){
		            	mynumArr[j].innerText=j+1;
		            }
		    	}
		    }	
	  }
	deleteXueYuan();

    //搜索学员：
	var myLi2Arr=document.getElementsByClassName('myLi2');
	for(var i=0;i<myLi2Arr.length;i++){
		myLi2Arr[i].onclick=function(){
			document.getElementById("mytext2").value=this.innerText;
		}
	}
	//学员设置：    
    var comfirmBtn=document.getElementById("comfirmBtn");
    comfirmBtn.onclick=function(){
      xueYuanSet();
      deleteXueYuan();
    }
    function xueYuanSet(){
    	// this.data-uk-modal="{target:'#my-id3'}";
    	var mytext2=document.getElementById("mytext2").value;
    	// var EmpNum=document.getElementById("EmpNum").innerText;
    	// var EmpName=document.getElementById("EmpName").innerText;
    	// var EmpDept=document.getElementById("EmpDept").innerText;
        if(mytext2=="张三"||mytext2=="1511222333"){
           document.getElementById("EmpNum").innerText='1511222333';
           document.getElementById("EmpName").innerText="张三";
           document.getElementById("EmpDept").innerText="软件开发部";
           document.getElementById("userPic").getElementsByTagName("img")[0].src="../images/comment-avatar1.jpg";
           
        }
        if(mytext2=="李四"||mytext2=="1511565433"){
           document.getElementById("EmpNum").innerText='1511565433';
           document.getElementById("EmpName").innerText="李四";
           document.getElementById("EmpDept").innerText="软件开发部";
           document.getElementById("userPic").getElementsByTagName("img")[0].src="../images/comment-avatar2.jpg";

        }
        if(mytext2=="王刚"||mytext2=="1234567890"){
           document.getElementById("EmpNum").innerText='1234567890';
           document.getElementById("EmpName").innerText="王刚";
           document.getElementById("EmpDept").innerText="软件开发部";
           document.getElementById("userPic").getElementsByTagName("img")[0].src="../images/comment-avatar3.jpg";
        }    	
    }


    //添加学员记录：
    var enterBtn=document.getElementById("enterBtn");
    enterBtn.onclick=function(){
    	//分页显示
    	if(document.getElementById("RecordTbody").getElementsByTagName("tr").length<=0){
    		document.getElementById("page").style.display="block";	
    	}
    	
    	var Num=$('#RecordTbody').children('tr').length+1;
    	var EmpNum=document.getElementById("EmpNum").innerText;
    	var EmpName=document.getElementById("EmpName").innerText;
    	var EmpDept=document.getElementById("EmpDept").innerText;
        var str='<tr><td class="mynum">'+Num+'</td><td>'+EmpNum+'</td><td>'+EmpName+'</td><td>'+EmpDept+'</td><td><button id="del-btn" class="uk-button uk-border-rounded deleteBtn">删除</button></td></tr>';
        document.getElementById("RecordTbody").innerHTML+=str;

        deleteXueYuan();
    }



    //未选中课程事件：
    document.getElementById("chooseBtn").onclick=function(){
    	var mytext=document.getElementById("mytext").value;
    	if(mytext==""||mytext=="请输入培训课程名"){
    		UIkit.modal.alert("请输入培训课程名!");
    	}
    }
    
}    
window.onresize = function(){
  var leftContainer = $("#leftContainer");
  var myrow = $("#myrow");
  var col = $(".col-md-9");
  myrow.height(col.height());
  leftContainer.height(myrow.height());
  // var col1 = $(".col-md-10");
  // myrow.height(col1.height());
  // leftContainer.height(myrow.height());
}



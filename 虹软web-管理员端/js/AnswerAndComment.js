

window.onload=function(){
	var mya=document.getElementsByClassName("mya");
	var myLi=document.getElementsByClassName("myLi");
	var mytext=document.getElementById("mytext");
	for(var i=0;i<myLi.length;i++){
		myLi[i].onclick=function(){
		   mytext.value=this.innerHTML.substring(24,this.innerHTML.length-4);
		}
	}
    // 动态筛选用户评论：	
	document.getElementById("confirmBtn").onclick=function(){
    //未选中课程事件：
    
    	var mytext=document.getElementById("mytext").value;
    	if(mytext==""||mytext=="请输入培训课程名"){
    		UIkit.modal.alert("请输入培训课程名!");
    	}
        else{
		    var picArr=new Array('../images/comment-avatar1.jpg','../images/comment-avatar2.jpg','../images/comment-avatar3.jpg','../images/comment-avatar4.jpg','../images/comment-avatar5.jpg');
			var commentTitle=new Array('国内比较好的前端开发社区有哪些？','用原生写项目好还是用框架写好啊,觉得工作中原生的怕用不上？','打算以PHP工程师为目标，学习前端有用吗？','异步编程 Asynchronous Programming','销售人员如何实现年薪20万，有什么推销产品的方法和技巧可以借鉴学习？');
			var commentText=new Array('(1)http://imweb.io;(2)http://alloyteam.com;(3)http://div.io','使用原生方法编写项目，能巩固串联PHP基础知识，为后续使用框架打下坚实的基础，更有助于深入理解框架原理和深层运用！','想成为一名合格的PHP工程师，前端是基本功，建议先修炼前端入门知识后，再继续学习PHP相关内容！','在异步编程中，需要避免阻塞线程，我们在这一章的第一节“线程、内存、锁定和阻塞”中已经对阻塞线程的概念有所了解了','第一，销售就是做人;第二，你必须拥有一颗大心脏，销售为什么赚钱多，因为确实承载了极大的压力，心理的，外部市场的，客户人际方面的，公司内部的;第三，你必须敏感：人际关系方面的敏感、客户需求的敏感、销售机会的敏感');
		    var date=new Array('2017-05-22','2017-05-21','2017-05-20','2017-5-26','2017-5-13');
		    var designation=new Array('IT精英','IT精英','php专家','后端工程师','销售专家');
		    var name=new Array('Sexar','Ximme','王刚','江风','陈粒');


		    // document.getElementById("commentContainer").innerHTML+=commentStr;
		    
		    var mytext=document.getElementById("mytext").value;
		    if(mytext=="前端开发培训"){
		    	document.getElementById("commentContainer").innerHTML="";
		    	for(var i=0;i<3;i++){
				    var commentStr='<div class=\"EachComment center-block\"><img class=\"uk-comment-avatar\" src='+picArr[i+1]+' alt=\"\"><div class=\"comment-box\" id=\"commentArea\"><article class=\"uk-comment\"><header class=\"uk-comment-header\"><div class=\"uk-comment-title\"><p>'+commentTitle+'</p></div><div class=\"uk-comment-body\"><p>'+commentText[i]+'</p></div><div class=\"uk-comment-meta uk-margin-top\"><span>'+designation[i]+'</span>|<span>'+name[i]+'</span>|<span>'+date[i]+'</span></div></header></article></div></div>';               
		    		document.getElementById("commentContainer").innerHTML+=commentStr;
		    	}
		    }
		    if(mytext=="后端开发培训"){
		    	document.getElementById("commentContainer").innerHTML="";
		    	for(var i=3;i<4;i++){
		    		var commentStr='<div class=\"EachComment center-block\"><img class=\"uk-comment-avatar\" src='+picArr[i+1]+' alt=\"\"><div class=\"comment-box\" id=\"commentArea\"><article class=\"uk-comment\"><header class=\"uk-comment-header\"><div class=\"uk-comment-title\"><p>'+commentTitle+'</p></div><div class=\"uk-comment-body\"><p>'+commentText[i]+'</p></div><div class=\"uk-comment-meta uk-margin-top\"><span>'+designation[i]+'</span>|<span>'+name[i]+'</span>|<span>'+date[i]+'</span></div></header></article></div></div>';               
		    		
		    		document.getElementById("commentContainer").innerHTML+=commentStr;
		    	}
		    }
		    if(mytext=="销售部营销培训"){
		    	document.getElementById("commentContainer").innerHTML="";
		    	for(var i=4;i<5;i++){
				    var commentStr='<div class=\"EachComment center-block\"><img class=\"uk-comment-avatar\" src='+picArr[i+1]+' alt=\"\"><div class=\"comment-box\" id=\"commentArea\"><article class=\"uk-comment\"><header class=\"uk-comment-header\"><div class=\"uk-comment-title\"><p>'+commentTitle+'</p></div><div class=\"uk-comment-body\"><p>'+commentText[i]+'</p></div><div class=\"uk-comment-meta uk-margin-top\"><span>'+designation[i]+'</span>|<span>'+name[i]+'</span>|<span>'+date[i]+'</span></div></header></article></div></div>';               
		    		document.getElementById("commentContainer").innerHTML+=commentStr;
		    	}
		    }        	
        }
    




	}



}
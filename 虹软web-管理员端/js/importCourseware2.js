window.onload=function(){
      //导航栏：
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
        }
      }


      // 导入上传设置：
      // var progressbar=document.getElementById("progressbar");
      // var upload=document.getElementById("upload");
      // upload.onclick=function(){
      //   progressbar.style.display="block";
      //   var bar= progressbar.find('.uk-progress-bar'),


      // }





}     
window.onresize = function(){
  var leftContainer = $("#leftContainer");
  var myrow2 = $("#myrow");
  var col2= $(".col-md-10");
  myrow2.height(col2.height());
  leftContainer.height(myrow2.height());
  // var col1 = $(".col-md-10");
  // myrow.height(col1.height());
  // leftContainer.height(myrow.height());
}


// 进度条：
function changeProgress(){
  //改变上传状态：
  var mystateArr=document.getElementsByClassName("mystate");
  for(var i=0;i<mystateArr.length;i++){
    var progressStr='<div class=\'progress progress-striped active\'><div class=\'progress-bar progress-bar-color bar\' role=\'progressbar\' style=\'width: 0%;\'></div></div>';
    mystateArr[i].innerHTML=progressStr;
    alert(mystateArr[i].innerHTML);
  }
  // var progressArry=document.getElementsByClassName("progress");
  // for(var i=0;i<progressArry.length;i++){
  //   progressArry[i].classList.remove("uk-hidden");
  // }
 

  // var bars=document.getElementsByClassName("bar");
  // for(var i=0;i<bars.length;i++){
  //   var progress = setInterval(function () {
  //     var $bar = $('#bar');
  //     var progressNum=Math.random()*10;

  //         $bar.width($bar.width() + progressNum);
      
  //     $bar.text($bar.width()/2.5+ "%");
  //     if ($bar.width()/2.5== 100){
  //       $bar.text("Still working ... " + $bar.width()/2.5+ "%");
  //       $("#bar").width(250);
  //       // alert($("#bar").width());
  //       for()
  //       $(".progress").fadeOut(2000);
  //     }
  
  // }, 800); 
// } 
    function aa(obj,progerss){
       
        var progressNum=Math.random()*10;
        // alert(progressNum);
        if ($(obj).width() >= 250) {
            clearInterval(progress);
        } else {
            
            $(obj).width($(obj).width() + progressNum);
            // alert( $(obj).width());
        }
        $(obj).text($(obj).width()/2.5+ "%");
        if ($(obj).width()/2.5== 100){
          $(obj).text("Still working ... " + $(obj).width()/2.5+ "%");
          // alert($("#bar").width());
          $(obj.parentNode).fadeOut(2000);

        }
    }
  var bars=document.getElementsByClassName("bar");
  for(var i=0;i<bars.length;i++){
    // alert(bars.length);
    var progress = setInterval(aa(bars[i],progress), 800);    
  }  

 
}


//获取文件名：
function insertTitle(path){  
   var test1 = path.lastIndexOf("/");  //对路径进行截取
   var test2 = path.lastIndexOf("\\");  //对路径进行截取
   var lastPosition=path.lastIndexOf(".");
   var test= Math.max(test1, test2);
   var text;
   if(test<0){  
    text= path;
   }else{
    text = path.substring((test + 1),lastPosition); //赋值文件名
   }  
   // alert(text);
} 
// 显示要上传的文件：
function showFiles(path){
  //获取文件名：
   var test1 = path.lastIndexOf("/");  //对路径进行截取
   var test2 = path.lastIndexOf("\\");  //对路径进行截取
   var lastPosition=path.lastIndexOf(".");
   var test= Math.max(test1, test2);
   var fileName;
   if(test<0){  
    fileName= path;
   }else{
    fileName = path.substring((test + 1),lastPosition); //赋值文件名
   }  
    var time=new Array("10:40","5:30","6:40");
    var mynum=document.getElementsByClassName("mynum");
    // alert(mynum.length);
    var num=mynum.length;
    // for(var i=0;i<mynum;i++){
      var recordStr='<div class=\"uk-flex uk-width-1-1 uk-margin-top\"><div class=\"uk-width-1-10  myborder  uk-text-center mynum\">'+num+'</div><div class=\"uk-width-2-10  myborder  uk-text-center \">'+fileName+'</div><div class=\"uk-width-1-10  myborder  uk-text-center \">'+time[0]+'</div><div class=\"uk-width-2-10  myborder  uk-text-center \">前端开发</div><div class=\"uk-width-2-10  myborder  uk-text-center \">软件开发部</div><div class=\"uk-width-4-10  myborder  uk-text-center mystate\">未上传</div></div>';
      document.getElementById("content").innerHTML+=recordStr;
  // }
} 
// showFiles();

function delrow(){   //删除行
    var i=tb.rows.length;
    if(i>1){
      tb.deleteRow(i-1);
    }
  }
  function addrow(){  //添加行
    var tr = document.createElement('tr');
    var cellsNum = tb.rows[0].cells.length;
    for(var j = 0 ; j < cellsNum ; j++){
    var td = document.createElement('td');
    var tdinput= document.createElement('input');
    tdinput.type="text";
    tdinput.style.width="40px";
    tdinput.style.border="none";
    tdinput.style.textAlign="center";
    // td.innerHTML="";
    td.appendChild(tdinput);
    tr.appendChild(td);
    }
    tb.tBodies[0].appendChild(tr);
  }
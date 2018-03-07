	var list  = document.getElementById("form1").getElementsByTagName("input");
	var listtext = document.getElementById("textdiv").getElementsByTagName("input");
	var listdaan = document.getElementById("daantext").getElementsByTagName("input");
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button3 = document.getElementById("button3");
	var button4 = document.getElementById("button4");
	var a1 = 1;
	var a2 = 1;
	var d1 = 0;
	var d2 = 0;
	$(document).ready(function(){
		
		var form1 = $("#form1");
		form1.change(function(){
			var qtype = $("input[name='qtype']:checked").val();
			if (qtype == '3') {
				button1.disabled = true;
				button2.disabled = true;
			}
			else{
				button1.disabled = false;
				button2.disabled = false;
			}
		});
	});
	function add1(){
		if (a1 != 5) {
			listtext[a1].style.display = 'block';
			var timu = document.getElementById("timu" + (a1 + 1));
			timu.style.display = 'block';
			a1++;
			d1++;
		}
	}
	function add2(){
		if (a2 != 5) {
			listdaan[a2].style.display = 'block';
			var daan = document.getElementById("daan" + (a2 + 1));
			daan.style.display = 'block';
			a2++;
			d2++;
		}
	}
	function dele1(){
		if (d1 != 0) {
			listtext[d1].style.display = 'none';
			var timu = document.getElementById("timu" + (d1 + 1));
			timu.style.display = 'none';
			a1--;
			d1--;
		}
	}
	function dele2(){
		if (d2 != 0) {
			listdaan[d2].style.display = 'none';
			var daan = document.getElementById("daan" + (d2 + 1));
			daan.style.display = 'none';
			a2--;
			d2--;
		}
	}
	function show() {
    var showpic= document.getElementById("hidden-table").style.display;
    if (showpic == "block") {
        document.getElementById("hidden-table").style.display = "none";
    } else {
        document.getElementById("hidden-table").style.display = "block";
    }
}
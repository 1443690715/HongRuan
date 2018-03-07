function show() {
    var showpic= document.getElementById("hidden-table").style.display;
    if (showpic == "block") {
        document.getElementById("hidden-table").style.display = "none";
    } else {
        document.getElementById("hidden-table").style.display = "block";
    }
}
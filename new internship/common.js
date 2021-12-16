function border_func() {
    var x = document.getElementById("borderbox");
    x.style.borderBottom = "2px solid #2874f0";
    x.style.color = "#2874f0";
    var y = document.getElementById("borderbox2");
    y.style.borderBottom = "none";
    y.style.color = "black";

}
function border_func2() {   
    var y = document.getElementById("borderbox2");
    y.style.borderBottom = "2px solid #2874f0";
    y.style.color = "#2874f0";
    var x = document.getElementById("borderbox");
    x.style.borderBottom = "none";
    x.style.color = "black";
}
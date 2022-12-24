var a = ["red", "blue", "green", "yellow", "pink", "seablue"];

function change(id) {
    var button = document.getElementsByClassName("first");
    var diwali_text = document.getElementById("diwali")
    var change_color=id;
    for(var i=0;i<button.length;i++){
        button[i].style.color=a[change_color];
        change_color.style.backgroundColor=a[change_color];
    }

}
function MultiColor() {
    multiCheck = true;
    if (multiCheck == true) {
        stop=setInterval(function(){
            var button=document.getElementsByClassName("first");
            var diwali_text = document.getElementById("diwali");
        
        var change_color=(Math.floor(Math.ranndom()*100))%a.length;
        for(var i=0;i<button.length;i++){
            button[i].style.color=a[change_color];
            diwali_text.style.backgroundColor=a[change_color];
        }
    },250);
    }
}
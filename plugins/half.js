var num = document.getElementById("number")
function half (x) {
    console.log(x/2)
}
num.addEventListener("keyup", function(e) {
    if(e.keyCode == 13) {
       half(num.value);
    }
})

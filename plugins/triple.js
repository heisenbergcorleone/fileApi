var num = document.getElementById("number")
function triple (x) {
    console.log(x*3)
}
num.addEventListener("keyup", function(e) {
    if(e.keyCode == 13) {
       triple(num.value);
    }
})

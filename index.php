<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style01.css">
    </head>
    <body>
        
        <div class="dropzone" id="dropzone">Drag and Drop a plugin here!</div>
        <div><input type = "number" id = "number"></div>
        <script>
           var x =  <?php include 'checker.php';?>;
           x.forEach(function(element){
            //console.log(element);
            var body = document.getElementsByTagName("body")[0];
            var script = document.createElement("script");
            script.src = element;
            body.appendChild(script);
           })

        </script>
    <script src="firstFile.js"></script>
    <script>

        var num = document.getElementById("number")
        function double (x) {
            console.log(x*2)
        }
        num.addEventListener("keyup", function(e) {
            if(e.keyCode == 13) {
            double(num.value);
            }
        })
        
    </script>

    </body>
</html>
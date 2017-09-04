 window.onload = (function(){
                
    var dropzone = document.getElementById("dropzone");

    function addplugin (data) {
        //console.log(data[0].file)
        var body = document.getElementsByTagName("body")[0];
        var script = document.createElement("script");
        script.src = data[0].file;
        body.appendChild(script);

    };


    function upload (files) {
        var formData = new FormData(),
            xhr = new XMLHttpRequest(),
            x;
        
        for (x = 0; x < files.length; x += 1) {
            formData.append('file[]', files[x])
        }
            

        xhr.onload = function () {
            var data = JSON.parse(this.responseText);
            addplugin(data);
            //console.log(data);
        };

        xhr.open('post','upload.php');
        xhr.send(formData);
        //console.log(xhr)
        

    };

    dropzone.ondrop = function (e) {
        e.preventDefault();
        this.className = "dropzone";
        upload(e.dataTransfer.files);
    }

    dropzone.ondragover = function () {
        this.className = "dropzone ondrag"
        return false;
    }
    dropzone.ondragleave = function () {
        this.className = "dropzone"
        return false;
    }

}());

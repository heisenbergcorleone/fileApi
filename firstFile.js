 window.onload = (function(){
                
    var dropzone = document.getElementById("dropzone");

    function upload (files) {
        var formData = new FormData(),
            xhr = new XMLHttpRequest(),
            x;
        
        for (x = 0; x < files.length; x += 1) {
            formData.append('file[]', files[x])
        }
            

        xhr.onload = function () {
            var data = this.responseText;
            console.log(data);
        };

        xhr.open('post','upload.php');
        xhr.send(formData);

        
        console.log(xhr)
        

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

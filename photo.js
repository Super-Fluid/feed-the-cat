// from https://developer.mozilla.org/en-US/docs/Web/API/Camera_API/Introduction
// edited a little

function setupPictureOption (time) {
    var takePicture = $("#take-picture"+time);
    var showPicture = $("#show-picture"+time);
    if (takePicture && showPicture) {
        // Set events
        takePicture.on('click', 'input:file', function(event) { displayPhoto(event, time); });
        console.log("z");
    }
}

function displayPhoto (event, time) {
    var takePicture = $("#take-picture"+time);
    var showPicture = $("#show-picture"+time);
            // Get a reference to the taken picture or chosen file
            console.log("c");
            var files = event.target.files,
                file;
            if (files && files.length > 0) {
            console.log("d");
                file = files[0];
                try {
                    // Create ObjectURL
                    var imgURL = window.URL.createObjectURL(file);

                    // Set img src to ObjectURL
                    showPicture.src = imgURL;
console.log("trying to show pic");

                    // Revoke ObjectURL
                    URL.revokeObjectURL(imgURL);
                }
                catch (e) {
                    try {
                        // Fallback if createObjectURL is not supported
                        var fileReader = new FileReader();
                        fileReader.onload = function (event) {
                            showPicture.src = event.target.result;
                        };
                        fileReader.readAsDataURL(file);
                    }
                    catch (e) {
                        //
                        var error = document.querySelector("#error");
                        if (error) {
                            error.innerHTML = "Neither createObjectURL or FileReader are supported";
                        }
                    }
                }
            }
        }
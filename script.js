window.addEventListener('load', function() {
    const video = document.getElementById('video');
    const overlay = document.querySelector('.overlay.png');

    // Request access to the camera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
        .then(function(stream) {
            // Set the video source to the stream from the camera
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.error('Error accessing the camera: ', err);
        });

    // Set the overlay image source
    overlay.src = 'overlay.png'; // Ensure this path is correct
});

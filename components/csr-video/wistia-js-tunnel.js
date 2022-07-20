//this file and method is created for tunneling from Angular Typescript to global JS library of Wistia
function loadWistiaVideo(videoId, trackingEmail) {

    var options = {
        autoPlay: true,
        videoFoam: true
    };

    if( trackingEmail && trackingEmail.length > 0)
        options.trackEmail = trackingEmail;

    //call global JS Wistia library
    Wistia.embed(videoId, options);
}
var validAdmin = false;

$("document").ready(function () {
    $("#about-menu").click(function () {
        $("#display").load("html/about.html");
    });
    $("#service-menu").click(function () {
        $("#display").load("html/services.html");
    });
    $("#gallery-menu").click(function () {
        $("#display").load("html/gallery.html");
        getImgs("72157681144808022");
    });
    $("#contact-menu").click(function () {
        $("#display").load("html/contact.html");
    });
    $("#btn-login").click(function(){
        $("#display").load("html/login.html");
    });
    $("#sign-out").hide();
});

function getImgs(setId) {
    var URL =
        "https://api.flickr.com/services/rest/" + // Wake up the Flickr API gods.
        "?method=flickr.photosets.getPhotos" + // Get photo from a photoset. http://www.flickr.com/services/api/flickr.photosets.getPhotos.htm
        "&api_key=1ced4a1ca9436b4de78558cd882b8ccf" + // API key. Get one here: http://www.flickr.com/services/apps/create/apply/
        "&photoset_id=" +
        setId + // The set ID.
        //"&privacy_filter=1"; // 1 signifies all public photos.
        "&per_page=20"; // For the sake of this example I am limiting it to 20 photos.
    //"&format=json&nojsoncallback=1";  // Er, nothing much to explain here.

    // See the API in action here: http://www.flickr.com/services/api/explore/flickr.photosets.getPhotos
    $.ajax({
        url: URL,
        dataType: "xml",
        success: function(data) {
        var photos = data.getElementsByTagName("photo");
        var imgs_html = "";
        $.each(photos, function(i, item) {
            // Creating the image URL. Info: http://www.flickr.com/services/api/misc.urls.html
            var img_src =
            "https://farm" +
            item.getAttribute("farm") +
            ".staticflickr.com/" +
            item.getAttribute("server") +
            "/" +
            item.getAttribute("id") +
            "_" +
            item.getAttribute("secret") +
            "_z.jpg";
            imgs_html +=
            "<li><img class='thumbnail' src='" +
            img_src +
            "' alt='" +
            item.id +
            "'></li>";
        });
        $(imgs_html).appendTo("#flickr-images");
        }
    });
}
function verifyAdmin(){
        $.getJSON("data/admins.json", function(data){

            var email = $("#email").val();
            var password = $("#pwd").val();
            var username = "";
            var admins = data.admins;
            $.each(admins, function(i,item){
                if(item.email === email && item.password === password){
                    validAdmin = true;
                    username = item.first_name;
                }
            });
            if(validAdmin===true){
            $("#welcome").html("Welcome " + username);
            $("#sign-out").show();
            $("#btn-login").hide();
            $("#display").load("html/about.html");
            }else{
                alert("Your information is not correct.");
            }
        });
    }
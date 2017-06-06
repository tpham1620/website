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
        "&api_key=1ced4a1ca9436b4de78558cd882b8ccf" + // API key. 
        "&photoset_id=" + setId; // The set ID.

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
        $.post("php/login.php", {"email":$("#email").val(), "pwd":$("#pwd").val()}, function(data){
            var username = "";
            var jdata = $.parseJSON(data);
            console.log(jdata);
            if(jdata.length>0){
                username = jdata[0].first_name;
                validAdmin = true;
            }
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
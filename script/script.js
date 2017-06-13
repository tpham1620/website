var validAdmin = false;

$("document").ready(function () {
    $("#display").load("html/weather.html");
    
    $("#about-menu").click(function () {
        $("#display").load("html/about.html");
    });
    $("#service-menu").click(function () {
        $("#display").load("html/services.html");
    });
    $("#gallery-menu").click(function () {
        $("#display").load("html/gallery.html");
    });
    $("#contact-menu").click(function () {
        $("#display").load("html/contact.html");
    });
    $("#btn-login").click(function(){
        $("#display").load("html/login.html");
    });
    $("#sign-out").hide();
});
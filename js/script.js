$(document).ready(function () {
    $(window).on("load resize scroll", function () {
        var aboutOffset = $('#about').position().top * 0.94;
        var projectsOffset = $('#projects').position().top * 0.97;
        var scrollPos = $(window).scrollTop();

        if (scrollPos < aboutOffset) {
            $('#masthead-nav a').css({'background': '#0f2a56', 'color': 'white'});
            $('#about-nav a').css({'background': '#9c1737', 'color': 'white'});
            $('#projects-nav a').css({'background': '#9c1737', 'color': 'white'});
        }
        else if (scrollPos >= aboutOffset && scrollPos < projectsOffset) {
            $('#masthead-nav a').css({'background': '#9c1737', 'color': 'white'});
            $('#about-nav a').css({'background': 'white', 'color': 'black'});
            $('#projects-nav a').css({'background': '#9c1737', 'color': 'white'});
        }
        else {
            $('#masthead-nav a').css({'background': '#9c1737', 'color': 'white'});
            $('#about-nav a').css({'background': '#9c1737', 'color': 'white'});
            $('#projects-nav a').css({'background': '#ffcb17', 'color': 'black'});
        }
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
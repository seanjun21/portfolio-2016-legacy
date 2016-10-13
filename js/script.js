$(document).ready(function () {
    $('#masthead-nav').css({'background': '#0f2a56'});
    $('#about-nav').css({'background': '#9c1737'});
    $('#projects-nav').css({'background': '#9c1737'});
    $('#masthead-nav a').css({'color': 'white'});
    $('#about-nav a').css({'color': 'white'});
    $('#projects-nav a').css({'color': 'white'});

    var aboutOffset = $('#about').position().top * 0.94;
    var projectsOffset = $('#projects').position().top * 0.97;

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        if (scrollPos < aboutOffset) {
            $('#masthead-nav').css({'background': '#0f2a56'});
            $('#about-nav').css({'background': '#9c1737'});
            $('#projects-nav').css({'background': '#9c1737'});
            $('#masthead-nav a').css({'color': 'white'});
            $('#about-nav a').css({'color': 'white'});
            $('#projects-nav a').css({'color': 'white'});
        }
        else if (scrollPos >= aboutOffset && scrollPos < projectsOffset) {
            $('#masthead-nav').css({'background': '#9c1737'});
            $('#about-nav').css({'background': 'white'});
            $('#projects-nav').css({'background': '#9c1737'});
            $('#masthead-nav a').css({'color': 'white'});
            $('#about-nav a').css({'color': 'black'});
            $('#projects-nav a').css({'color': 'white'});
        }
        else {
            $('#masthead-nav').css({'background': '#9c1737'});
            $('#about-nav').css({'background': '#9c1737'});
            $('#projects-nav').css({'background': '#ffcb17'});
            $('#masthead-nav a').css({'color': 'white'});
            $('#about-nav a').css({'color': 'white'});
            $('#projects-nav a').css({'color': 'black'});
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
$(document).ready(function () {
    $(window).on("load resize scroll", function () {
        var scrollPos = $(window).scrollTop();
        var aboutOffset = $('#about').position().top * 0.94;
        var projectsOffset = $('#projects').position().top * 0.97;
        var contactOffset = $('#footer').position().top * 0.9815;

        if (scrollPos < aboutOffset) {
            $('#masthead-nav a').css({'background': '#0F2A56', 'color': '#FFFFFF'});
            $('#about-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#projects-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#contact-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'})
        } else if (scrollPos >= aboutOffset && scrollPos < projectsOffset) {
            $('#masthead-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#about-nav a').css({'background': '#FFFFFF', 'color': '#000000'});
            $('#projects-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#contact-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'})
        } else if (scrollPos >= projectsOffset && scrollPos < contactOffset) {
            $('#masthead-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#about-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#projects-nav a').css({'background': '#FFD000', 'color': '#000000'});
            $('#contact-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'})
        } else {
            $('#masthead-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#about-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#projects-nav a').css({'background': '#9C1737', 'color': '#FFFFFF'});
            $('#contact-nav a').css({'background': '#039DC3', 'color': '#000000'})
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


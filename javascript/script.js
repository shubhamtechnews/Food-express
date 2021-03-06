$(document).ready(function () {
    $(".js-nav").waypoint(function (n) {
        "down" == n ? $(".nav-bar").addClass("sticky") : $(".nav-bar").removeClass("sticky")
    }, {
        offset: "90px"
    }), $(".js-scroll-to-plans").click(function () {
        $("html, body").animate({
            scrollTop: $(".js-section-plans").offset().top
        }, 1e3)
    }), $(".js-scroll-to-start").click(function () {
        $("html,body").animate({
            scrollTop: $(".js-nav").offset().top
        }, 1e3)
    }), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (n) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var o = $(this.hash);
            (o = o.length ? o : $("[name=" + this.hash.slice(1) + "]")).length && (n.preventDefault(), $("html, body").animate({
                scrollTop: o.offset().top
            }, 1e3))
        }
    }), $(".flexbox-container").waypoint(function (n) {
        "down" == n && $(".flexbox-container").addClass("animate__fadeInUp")
    }, {
        offset: "70%"
    }), $(".iphonejpg").waypoint(function (n) {
        "down" == n && $(".iphonejpg").addClass("animate__fadeInLeft")
    }, {
        offset: "85%"
    }), $(".cities-discreption").waypoint(function (n) {
        "down" == n && $(".cities-discreption").addClass("animate__fadeIn")
    }, {
        offset: "80%"
    });
    $(".js-nav-icon").click(function () {
        $(".js-main-nav").slideToggle(500), $(".js-nav-icon").css("display", "none"), $(".js-nav-icon-cross").css("display", "inline-block")
    }), $(".js-nav-icon-cross").click(function () {
        $(".js-main-nav").slideToggle(500), $(".js-nav-icon").css("display", "inline-block"), $(".js-nav-icon-cross").css("display", "none")
    })
});

// video js--------------------------------------------------

// * selectors
const video = document.querySelector('.header__video');
const videoControl = document.querySelector('.header__control--video');
const videoIcon = document.querySelector('.icon-video');

const audio = document.querySelector('.header__audio');
const audioControl = document.querySelector('.header__control--audio');
const audioIcon = document.querySelector('.icon-audio');

// * variables
let isPlaying = false;
let mute = false;
audio.volume = 0.2;
video.pause();
audio.pause();     

// * functions

const videoControlFunction = function () {
    if (isPlaying) {
        videoIcon.classList.toggle('fa-pause-circle');
        videoIcon.classList.toggle('fa-play-circle');
        video.pause();
        audio.pause();
    } else {
        videoIcon.classList.toggle('fa-pause-circle');
        videoIcon.classList.toggle('fa-play-circle');
        video.play();
        audio.play();
    }
    isPlaying = !isPlaying
}
const audioControlFunction = function () {
    audioIcon.classList.toggle('fa-volume-up');
    audioIcon.classList.toggle('fa-volume-mute');
    audio.muted = mute;
    mute = !mute;
}

// * eventlistners
videoControl.addEventListener('click', videoControlFunction);
audioControl.addEventListener('click', audioControlFunction);


// ! loading animation ----------------------------
const load = document.querySelector('.loading');
window.onload = function () {
    load.style.transition = 'all 1s 1s';
    load.style.opacity = '0';
    load.style.visibility = 'hidden';
}

// ! network check------------------------------------
// ! -------------------------------------------------

if (navigator.connection && !!navigator.connection.effectiveType) {
    if (navigator.connection.effectiveType === '4g') {
        video.style.opacity = '1';
    } else {
        video.setAttribute('src', '2.mp4');
    }
}

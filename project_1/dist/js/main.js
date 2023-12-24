setInterval(auto_slider, 12000);

function auto_slider() {
    document.getElementById("slide").src = "img/main_background_2.png";
    setInterval(auto_slider_2, 12000);
}

function auto_slider_2() {
    document.getElementById("slide").src = "img/main_background.png";
    setInterval(auto_slider, 12000);
}
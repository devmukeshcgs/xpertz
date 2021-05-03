$(document).ready(function () {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        type: "double",
        min: 10,
        max: 350,
        from: 10,
        to: 350,
        drag_interval: true,
        min_interval: null,
        max_interval: null
    });
})
$(document).ready( function () {
    var images = document.querySelectorAll('.thumbnail');
    new simpleParallax(images, {
        delay: 0,
        orientation: 'down',
        overfow: true
    });;
});

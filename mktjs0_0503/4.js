$(document).ready(function () {
    $('#hide').click(function () {
        $('p').hide();
    })
    $('#visualize').click(function () {
        $('p').show();
    })
    $('#toggle').click(function () {
        $('p').toggle();
    })
    $('#opacity1').click(function () {
        $('form').css('opacity', '0.1');
    })
    $('#opacity5').click(function () {
        $('form').css('opacity', '0.5');
    })
    $('#opacity8').click(function () {
        $('form').css('opacity', '0.8');
    })
    $('#formHide').click(function () {
        $('form').hide();
    })
    $('#formVisualize').click(function () {
        $('form').show();
    })
    $('#formToggle').click(function () {
        $('form').toggle();
    })
});
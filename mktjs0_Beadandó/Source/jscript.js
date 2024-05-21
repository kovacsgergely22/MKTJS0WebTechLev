$(document).ready(function () {
    $("#ReadJson").click(function () {
        $.getJSON("Source/STARWARS.JSON", function (data) {
            $('#stg').html('<h2>STAR WARS filmek és sorozatok sorrendben</h2>');
            data.forEach(function (movies) {
                $('#stg').append('<hr>');
                $('#stg').append('<p><b>Film címe: </b>' + movies.filmcim + '</p>');
                $('#stg').append('<p><b>Megjelenés éve: </b>' + movies.megjelensev + '</p>');
                $('#stg').append('<p><b>Film/sorozat: </b>' + movies.filmsorozat + '</p>');
                $('#stg').append('<b>Látható: </b>;' + movies.elerhetoseg + "<br");
            });
        });
    });
});
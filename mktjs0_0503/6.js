$(document).ready(function () {
    $("#animation").click(function () {
        $("#box").animate({
            marginLeft: '+=400px',
            width: '+=100px',
            fontSize: '30pt',
        }, 1000)
            .animate({
                marginTop: '+=300px',
                width: '-=100px',
                fontSize: '+=10%',
            }, 1000)
            .animate({
                marginLeft: '-=400px',
                opacity: 0.4,
            }, 1000)
            .animate({
                marginTop: '-=300px',
                fontSize: '12pt',
                opacity: 1,
            }, 1000, function () {
                alert("Animation complete");
            }
            );
    });

    $("#hide").click(function () {
        $("#par").hide(function () {  
            alert("Bekezdések elrejtve!");
        });
    });

    $("#toggle").click(function () {
        $("#box").slideToggle().animate({
            marginLeft: '+=300px', 
        }, 1000);
    });
});
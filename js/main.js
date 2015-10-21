$(document).ready(function () {
    console.log("ready!");

    $("#submit").click(function () {
        $.ajax({
            url: "result.html",
            dataType: "html"
        }).done(function (responseHtml) {
            $("#results").html(responseHtml);
            Materialize.toast('Recieved!', 3000, 'rounded');
        });

        var parent = $(".parent-element");
        var position = parent.position();
        var right = position.left + parent.width();
        Materialize.toast("left: " + position.left + ", right: " + right, 3000, 'rounded');

        $("#results").empty();
        $.ajax({
            url: "result.html",
            dataType: "html"
        }).done(function (responseHtml) {
            $("#results").html(responseHtml);
            $("#hr-sitemap").animate({
                width: "+=560"
            }, 500, function () {
                // Animation complete.
                Materialize.toast('Completed', 3000, 'rounded');
            });
            $(".chip-section").animate({
                width: "+=560"
            }, 500, function () {
                // Animation complete.
                Materialize.toast('Completed2', 3000, 'rounded');
            });
            $("#result-head-robots").hide('slow', function () {
                $("#result-head-robots").remove();
            });
            $("#results").css({
                left: position.left,
                width: right,
                position: 'absolute'
            });
        });
    });
});
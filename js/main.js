$(document).ready(function () {
    console.log("ready!");

    $("#submit").click(function () {
        $("#results").empty();
        $.ajax({
            url: "result.html",
            dataType: "html"
        }).done(function (responseHtml) {
            $("#results").html(responseHtml);
            var t = document.getElementById("lever").checked;
            JQUI();
            if (t) {
                finalResult();
            }
        });
    });

    function finalResult() {
        $("#result-head-robots").hide('slow', function () {
            $("#result-head-robots").remove();
        });
        $("#result-head-sitemap").position({
            of: $("#parent-element"),
            my: "center top",
            at: "center bottom",
            using: function (pos) {
                $(this).animate(pos, "slow", function () {
                    $("#result-head-sitemap").position({
                        of: $("#parent-element"),
                        my: "left top",
                        at: "left bottom",
                        using: function (pos) {
                            $(this).animate(pos, "fast", function () {
                                var w = $("#parent-element").width();
                                $("#hr-sitemap").animate({
                                    width: "+=" + (w / 3) * 2 + "px"
                                }, 400, "easeOutBounce", function () {
                                    $(".chip-section").position({
                                        of: $("#result-head-sitemap"),
                                        my: "center bottom",
                                        at: "center bottom",
                                        using: function (pos) {
                                            $(this).animate(pos, "fast", function () {
                                                $("#result-head-sitemap").position({
                                                    of: $("#parent-element"),
                                                    my: "center top",
                                                    at: "center bottom",
                                                    using: function (pos) {
                                                        $(this).animate(pos, "fast");
                                                    }
                                                });
                                            });
                                        }
                                    });
                                });
                            });
                        }
                    });
                });
            }
        });
    }

    function JQUI() {
        $("#result-head-sitemap").position({
            of: $("#parent-element"),
            my: "left top",
            at: "left bottom",
            using: function (pos) {
                $(this).animate(pos, "slow");
            }
        });
        $("#result-head-robots").position({
            of: $("#parent-element"),
            my: "right top",
            at: "right bottom",
            using: function (pos) {
                $(this).animate(pos, "slow");
            }
        });
    }
});
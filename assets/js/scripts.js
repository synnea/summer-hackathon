$(document).ready(function () {

    // ------------------------------------- EVENT PAGE ------------------------------------

    // Hide IconKids and IconSports

    $(function () {
        $("#iconkidsmark").hide();
        $("#iconsportsmark").hide();
    });

    // Upon clicking on the IconKids tag, it appears

    $(function () {
        $("#iconkidsbutton").on("click", function () {
            $(this).addClass("selected");
            $("#iconmanbutton").removeClass("selected");
            $("iconsportsbutton").removeClass("selected");
            $("#iconmanmark").hide();
            $("#iconsportsmark").hide();
            $("#iconkidsmark").show();
        });
    });

    $(function () {
        $("#iconmanbutton").on("click", function () {
            $(this).addClass("selected");
            $("#iconkidsbutton").removeClass("selected");
            $("#iconsportsbutton").removeClass("selected");
            $("#iconkidsmark").hide();
            $("#iconsportsmark").hide();
            $("#iconmanmark").show();
        });
    });

    $(function () {
        $("#iconsportsbutton").on("click", function () {
            $(this).addClass("selected");
            $("#iconkidsbutton").removeClass("selected");
            $("#iconmanbutton").removeClass("selected");
            $("#iconkidsmark").hide();
            $("#iconmanmark").hide();
            $("#iconsportsmark").show();
        });
    });


});
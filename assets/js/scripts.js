$(document).ready(function () {

    // ------------------------------------- EVENT PAGE ------------------------------------

    // Hide IconKids and IconSports

    $(function () {
        $("#iconkidsmark").hide();
    });

    // Upon clicking on the IconKids tag, it appears

    $(function () {
        $("#iconkidsbutton").on("click", function () {
            $(this).addClass("selected");
            $("#iconmanbutton").removeClass("selected");
            $("#iconmanmark").hide();
            $("#iconkidsmark").show();
        });
    });

    $(function () {
        $("#iconmanbutton").on("click", function () {
            $(this).addClass("selected");
            $("#iconkidsbutton").removeClass("selected");
            $("#iconkidsmark").hide();
            $("#iconmanmark").show();
        });
    });

    // // The "Home" button takes the user back to the landing page.

    // $(function () {
    //     $("#navHome").on("click", function () {
    //         $(".dashboard-container").hide();
    //         $(".main").fadeIn(500);
    //         $(".content-container").removeClass("background-alt").addClass("background");
    //     });
    // });

    // // The following prevents the graphs from breaking by clicking on bar labels.

    // $(function () {
    //     $(".barLabel").on("click", function () {
    //         dc.redrawAll();
    //     });
    // });

    // // ------------------------------------ LANDING PAGE ---------------------------------------

    // // The CTA button takes the user to the first dashboard.

    // $(function () {
    //     $("#main-btn").on("click", function () {
    //             $(".main").hide();
    //             $(".dashboard-container").fadeIn(500);
    //             $(".content-container").removeClass("background").addClass("background-alt");
    //             // The following line starts intro.js upon click of the main button.
    //             introJs().start();
    //         });
    //     });


    // // ------------------------------------ SMOOTH SCROLLING ---------------------------------------

    // // A smooth animation takes the user to the desired dashboard

    // $('a[href*="#"]').on('click',function(e) {
    //     e.preventDefault();
    //     var target = this.hash;
    //     var $target = $(target);
    //     $('html, body').stop().animate({
    //      'scrollTop': $target.offset().top
    //     }, 900, 'swing', function () {
    //      window.location.hash = target;
    //     });
    //    });

    //    $('#resetTotalViews').click(function() {
    //     dc.filterAll();
    //     dc.renderAll();
    // }); 

});
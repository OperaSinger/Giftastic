$(document).ready(function () {


    // declare global variables. 
    var newGifButton = true;
    var express = expressions["happiness", "boredom", "glee", "grumpiness"];


    // pupulate buttons function

    function makeButtons() {

        $("#buttons").empty();

        for (i = 0; i < expressions.length; i++) {

            $("#buttons").html(
                `<button type='button' id='${express[i]}' class='btn btn-primary btn-lg btn-block'>${express[i]}</button>`
            )
        }
    }

    // starts and stops GIF's

    $(".gif").on("click", function() {

        var state = $(this).attr("data-state");
        console.log(state);
   
   
         if (state === "still") {
           $(this).attr("src", $(this).attr("data-animate"));
           $(this).attr("data-state", "animate");
         }
         else if (state === ("animate")) {
           $(this).attr("src", $(this).attr("data-still"));
           $(this).attr("data-state", "still");
   
         }
    })

    // enters value of user entry into array

    $("#enter").on("click", function (event) {
        event.preventDefault();
        var expressEnt = $("#expressEnt").val().trim();
        expressions.push(expressEnt);
        makeButtons();
    });

    // process AJAX query

    $("#enter").on("click", function () {

        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + expressEnt;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var imageUrl = response.data.image_original_url;
            var expressionGif = $("<img>");
            expressionGif.attr("src", imageUrl);
            expressionGif.attr("alt", "expression");
            $("#images").prepend(expressionGif);
        })

    })

 })

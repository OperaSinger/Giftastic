$(document).ready(function () {

    // declare global variables. 

    var express = ["happiness", "boredom", "glee", "grumpiness"];


    // pupulate buttons function

    function makeButtons() {

        $("#buttons").empty();

        for (i = 0; i < express.length; i++) {

            $("#buttons").append(
                `<button type='button' id='${express[i]}' class='btn btn-primary btn-lg btn-block newSearch'>${express[i]}</button>`
            )
        }
    }

    // enters value of user entry into array

    $("#enter").on("click", function (event) {
        event.preventDefault();
        var expressEnt = $("#expressEnt").val().trim();
        express.push(expressEnt);
        makeButtons();
    });

    // process AJAX query and pupulate two columns with 10 gifs - generated from FOR loops. 

    $(document).on("click", ".newSearch", function () {
        expressEnt = $(this).attr("id");
        console.log(expressEnt);
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + expressEnt;

        // clear columns for new Gif's
        
        $("#gifLeft").empty();
        $("#gifRight").empty();

        // loop to populate left column of Gif's and give them their class and ID:

        for (j = 0; j < 5; j++) {
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                var animateUrl = response.data.image_original_url;
                var stillUrl = response.data.images.original_still.url;
                var expressionGif = $("<img>");
                expressionGif.attr("src", stillUrl);
                expressionGif.attr("data-still", stillUrl);
                expressionGif.attr("data-animate", animateUrl);
                expressionGif.attr("data-state", "still");
                expressionGif.attr("class", "gif left");
                expressionGif.attr("alt", "expression");
                $("#gifLeft").prepend(expressionGif);
            })

        }

        // loop to populate right column of Gif's and give them their class and ID:

        for (j = 0; j < 5; j++) {
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var animateUrl = response.data.image_original_url;
                var stillUrl = response.data.images.original_still.url;
                var expressionGif = $("<img>");
                expressionGif.attr("src", stillUrl);
                expressionGif.attr("data-still", stillUrl);
                expressionGif.attr("data-animate", animateUrl);
                expressionGif.attr("data-state", "still");
                expressionGif.attr("class", "gif right");
                expressionGif.attr("alt", "expression");
                $("#gifRight").prepend(expressionGif);
            })

           



        }

    })

     // code that will start and stop GIF's:

    $("body").on("click", ".gif", function () {

        var state = $(this).attr("data-state");
        console.log(state);


        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else if (state === ("animate")) {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");

        }
    })

})

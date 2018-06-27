$(document).ready(function() {


// declare global variables. 
var newGifButton = true;
var express = expressions["happiness", "boredom", "glee", "grumpiness"];
var inputExpression;
var addExpression = 0;


// pupulate buttons function

function makeButtons() {

    $("#buttons").empty();

    for (i = 0; I < expressions.length; I++) {
        
        $("#buttons").html(
\            `<button type='button' id='${express[i]}' class='btn btn-primary btn-lg btn-block'>${express[i]}</button>`
        )

    }
}



// on click function to call AJAX and gif's





// create buttons function


}

<div class="col-md-3" id="buttons">
                <button type="button" id="happiness" class="btn btn-primary btn-lg btn-block">happiness</button>


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response.Title);
      var tbody = $("tbody");
      var newRow = $("<tr>");

      // Obtain a reference to the tbody element in the DOM
      // Create and save a reference to new empty table row
      
      // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object

        var newTitle = $("<td>").text(response.Title);
        var newYear = $("<td>").text(response.Year);
        var newActors = $("<td>").text(response.Actors);

      // Append the td elements to the new table row

      newRow.append(newTitle, newYear, newActors);

      // Append the table row to the tbody element

      tbody.append(newRow);



      for (i = 0; i < wordChoice.length; i++) {
        wordBlanks.push(" _");
        $("#word").html("<h1>" + wordBlanks.join(" ") + "</h1>")
    }

   


    });
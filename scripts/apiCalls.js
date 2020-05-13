$(document).ready(function(){

    $.ajax({
        url: "https://a.4cdn.org/boards.json",
        success: function(result){
            console.log(result);
            $("button.suc").html("Success");
        },
        error: function(result){
            console.log("Result not found!");
            $("button.suc").html("Failure");
        }
    });

});
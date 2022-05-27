//Store format for current time and display current date
var currentime = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentime);


$(document).ready(function () {
    //when save button is clicked text for event is saved
    $(".saveBtn").on("click", function () {
        // Get the values of the row text
        console.log(this);
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save the description of event to local storage
        localStorage.setItem(time, description);

    })

    function Trackhour() {
        //get current number of hours.
        var currentHour = moment().hour(); // use of moment.js

        // run this function for each time block
        $(".time-block").each(function () {
            var timeblockHour = parseInt($(this).attr("id").split("hour")[0]);
            console.log(timeblockHour, currentHour)

            //if function--to change color depending on current timeblock
            if (timeblockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeblockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    //Writing the local storage to the textArea
    $("#9hour .description").val(localStorage.getItem("9hour"));
    $("#10hour .description").val(localStorage.getItem("10hour"));
    $("#11hour .description").val(localStorage.getItem("11hour"));
    $("#12hour .description").val(localStorage.getItem("12hour"));
    $("#13hour .description").val(localStorage.getItem("13hour"));
    $("#14hour .description").val(localStorage.getItem("14hour"));
    $("#15hour .description").val(localStorage.getItem("15hour"));
    $("#16hour .description").val(localStorage.getItem("16hour"));
    $("#17hour .description").val(localStorage.getItem("17hour"));

    Trackhour(); 

})






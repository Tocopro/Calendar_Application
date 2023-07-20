/* --------------------initializing variables for current time by the inbuilt function------------------ */
let time_now = new Date();
time_now = time_now.getHours();
console.log(time_now);


/* -------------starter function which will dynamically produce the html that builds the App--------------- */

$(document).ready(function () {
/*-----------------initialize the time variable and display the text in the Header------------------ */
    let dt_to = $.datepicker.formatDate('DD  dd MM yy', new Date());
    $("#TodayDate").text(dt_to);
/*----------------------------produce dynamically all the rows needed from 9am - 5pm--------------------- */
    for (let i = 9; i <= 17; i++) {
        let time_block_container = $("<div class='row time-block'>");
        time_block_container.attr("id", "hour-" + i);
        let day_time = $("<p class='col-2 col-md-1 hour text-center py-3'>");
        if (i > 12) {
            day_time.text(i - 12 + " PM");
        } else if (i === 12) {
            day_time.text(i + " PM");
        } else {
            day_time.text(i + " AM");
        }
        let text_space = $("<textarea  class='col-8 col-md-10 event_described' rows='3'>");
        let button_device = $("<button class='btn saveButton col-2 col-md-1' aria-label='save'><i class='fas fa-save' aria-hidden='true'></i></button>");
/*---------------------------change the background color of each time slot based on the current 
time. grey for past hour, green for present hour and red for future hour-----------------*/

        time_block_container.append(day_time, text_space, button_device);
        $(".container-lg").append(time_block_container);
        if (i < time_now) {
            text_space.css("backgroundColor", "#d3d3d3");
        } else if (i === time_now) {
            text_space.css("backgroundColor", "#77dd77");
        } else {
            text_space.css("backgroundColor", "#ff6961");
        }



    }


/* -------------------------save button when clicked saves the text message in the local storage--------------- */
    $(".saveButton").on("click", function () {
        let value = $(this).siblings(".event_described").val();
        let time = $(this).parent().attr("id");
        time = time.replace("hour-", "");
        if (time > 12) {
            time = (time - 12) + " PM";
        } else if (time === 12) {
            time = time + " PM";
        } else {
            time = time + " AM"
        }
        localStorage.setItem(time, value);


        console.log('Content:', value);
        console.log('Time:', time);

/*-------------------------------The key value pairs saved in the local storage are printed in the 
correct time slot --------------------- */

    });
    let hour_9 = localStorage.getItem("9 AM");
    $("#hour-9 .event_described").val(hour_9);

    let hour_10 = localStorage.getItem("10 AM");
    $("#hour-10 .event_described").val(hour_10);

    let hour_11 = localStorage.getItem("11 AM");
    $("#hour-11 .event_described").val(hour_11);

    let hour_12 = localStorage.getItem("12 AM");
    $("#hour-12 .event_described").val(hour_12);

    let hour_13 = localStorage.getItem("1 PM");
    $("#hour-13 .event_described").val(hour_13);

    let hour_14 = localStorage.getItem("2 PM");
    $("#hour-14 .event_described").val(hour_14);

    let hour_15 = localStorage.getItem("3 PM");
    $("#hour-15 .event_described").val(hour_15);

    let hour_16 = localStorage.getItem("4 PM");
    $("#hour-16 .event_described").val(hour_16);

    let hour_17 = localStorage.getItem("5 PM");
    $("#hour-17 .event_described").val(hour_17);
   
});


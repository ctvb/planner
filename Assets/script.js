$(document).ready(function () {

  // Sets time format
  var currentDay = dayjs().format('dddd, MMM D');
  $('#currentDay').text(currentDay);
  console.log(currentDay);

  // GET CURRENT HOUR
  var currentHour = dayjs().format('H');

  // Runs time function for each time block in HTML
  $('.time-block').each(function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);

    // Determines colour for time block
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour > currentHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }

    var event = localStorage.getItem('event-' + hour);
    $(this).find('.description').val(event);

    $(this).find(".saveBtn").click(function () {
      var eventText = $(this).siblings('.description').val();
      localStorage.setItem('event-' + hour, eventText);
    });
  });
});

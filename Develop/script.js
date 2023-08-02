// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  var currentHour = dayjs().format('H');


  console.log(currentHour);
  

  $(".time-block").each(function () {
    var hour = parseInt($(this).closest('.time-block').attr('id'));
    console.log(hour);
    if (currentHour > hour) {
      $(this).addClass('past')
    } else if (currentHour === hour) {
      $(this).removeClass('past')
      $(this).addClass('present')
    } else {
      // (currentHour < hour) {
      $(this).addClass('future')
    }
  });


  $('.saveBtn').on('click', function () {
    var timeBlockId = $(this).closest('.time-block').attr('id');
    console.log(timeBlockId);
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  })



});

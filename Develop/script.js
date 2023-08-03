// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //Pulls today's date and reformats it. Adds it to the current day. 
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  // var currentHour = dayjs().format('H');
  var currentHour = 13


  console.log(currentHour);
  
   //Creates a for loop. or each, which will compare Current hour to hour and add the class to .timeblock depending on what the two values are. 
  $(".time-block").each(function () {
    // sets the variable for hour, converting the value to a number via parseInt
    var hour = parseInt($(this).closest('.time-block').attr('id'));
    // console.log(hour);
    //if Current hour is less than the hour add the class of psat.
    if (currentHour > hour) {
      $(this).addClass('past')
      // if current hour is equal to hour, add class of present and remove class of past. 
    } else if (currentHour == hour) {
      $(this).removeClass('past')
      $(this).addClass('present')
    } else {
      // if current hour is anything else, set the class to future. 
      $(this).addClass('future')
    }
  });

   // sets a click button for save icon.
  $('.saveBtn').on('click', function () {
    // sets a variable for the closest time-block class to the button. 
    var timeBlockId = $(this).closest('.time-block').attr('id');
    // console.log(timeBlockId);
    // sets the variable for the user input. 
    var userInput = $(this).siblings('.description').val();
    // logs the userInput to storage. 
    localStorage.setItem(timeBlockId, userInput);
  })

  $('.time-block').each(function () {
    // grabs the timeBlock variable. 
    var timeBlockId = $(this).attr('id');
    // sets the values we just entered from local storage 
    var storedValue = localStorage.getItem(timeBlockId);
    // if the local storage isn't empty, it pulls the storage and sets description value to that corresponding with that value. 
    if (storedValue !== null) {
      $(this).find('.description').val(storedValue);
    }
  });

});

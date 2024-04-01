// Function to initialize the clock hands based on the current time
function initializeClock() {
  var d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds();

  var hDeg = h * 30 + m * (360 / 720),
      mDeg = m * 6 + s * (360 / 3600),
      sDegInitial = s * 6;

  var hEl = document.querySelector('.clock__hour'),
      mEl = document.querySelector('.clock__minute'),
      sEl = document.querySelector('.clock__second');

  hEl.style.transform = "rotate(" + hDeg + "deg)";
  mEl.style.transform = "rotate(" + mDeg + "deg)";
  sEl.style.transform = "rotate(" + sDegInitial + "deg)";

  // Continuously update the seconds hand after initializing it
  updateSeconds(sDegInitial);
}

// Call the initializeClock function when the page is loaded
initializeClock();

// Function to continuously update the seconds hand
function updateSeconds(sDegInitial) {
  var sEl = document.querySelector('.clock__second');

  // Update the seconds hand every second
  setInterval(function () {
      sDegInitial += 6; // Increment the rotation by 6 degrees (1 second)
      sEl.style.transform = "rotate(" + sDegInitial + "deg)";

      // Reset the rotation to 0 degrees after completing a full rotation (360 degrees)
      if (sDegInitial >= 360) {
          sDegInitial = 0;
      }
  }, 1000); // Update every second (1000 milliseconds)
}

// Function to display the current date and day
function displayDateAndDay() {
  var dateEl = document.querySelector('.clock__date');
  var dayEl = document.querySelector('.clock__day');

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var currentDate = new Date();
  var day = days[currentDate.getDay()];
  var month = currentDate.getMonth() + 1; // Add 1 to get the correct month index
  var date = currentDate.getDate();
  var year = currentDate.getFullYear();

  // Format the month and date to have leading zeros if necessary
  month = month < 10 ? '0' + month : month;
  date = date < 10 ? '0' + date : date;

  dateEl.textContent = date + '/' + month + '/' + year;
  dayEl.textContent = day;
}

// Call the function to display the date and day
displayDateAndDay();

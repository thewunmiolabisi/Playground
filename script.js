// Login button functionality
let getStartedButton = document.getElementById('getStartedButton');
getStartedButton.addEventListener('click', function() {
    window.location.href = 'login.html';
});

// Signup button functionality
var signupButtons = document.getElementsByClassName('signup');
for (var i = 0; i < signupButtons.length; i++) {
    signupButtons[i].addEventListener('click', function() {
        window.location.href = 'signup.html';
    });
}

// Order buttons functionality
let orderButton = document.querySelectorAll('.order'); 
orderButton.forEach ((function(button) {
  button.addEventListener('click', function() {
    alert('Order has been successfully added to cart');
  })
}));

// Navigation bar
function toggleNav() {
  var navList = document.getElementById("navList");
  if (navList.style.display === "block") {
    navList.style.display = "none";
  } else {
    navList.style.display = "block";
  }
}

function calculateTimeRemaining(endTime) {
  const totalSeconds = Math.floor((Date.parse(endTime) - Date.now()) / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { days, hours, minutes, seconds };
}

function updateTimer(button) {
  const endTime = button.dataset.endTime;
  const timer = setInterval(() => {
    const timeRemaining = calculateTimeRemaining(endTime);

    if (timeRemaining.days <= 0 && timeRemaining.hours <= 0 && timeRemaining.minutes <= 0 && timeRemaining.seconds <= 0) {
      clearInterval(timer);
      button.textContent = 'Expired';
      button.disabled = true;
    } else {
      button.textContent = `${timeRemaining.days} days: ${timeRemaining.hours} hours: ${timeRemaining.minutes} minutes: ${timeRemaining.seconds} seconds`;
    }
  }, 1000);
}

const timeButtons = document.querySelectorAll('.time');
timeButtons.forEach((button) => {
  updateTimer(button);
});
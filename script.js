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


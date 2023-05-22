function saveData() {
    localStorage.setItem(`username`, `${$("#signupUsername").val()}`);
    localStorage.setItem(`email`, `${$("#signupEmail").val()}`);
    localStorage.setItem(`password`, `${$("#signupPassword").val()}`);
}

var username = localStorage.getItem("username");
document.getElementById("navbarUserName").innerHTML += username;

// khaled
// slider
let sliderIndex = 0;
const slides = document.getElementsByClassName("slide");
setInterval(function() {
  sliderIndex++;
  if (sliderIndex >= slides.length) {
    sliderIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[sliderIndex].style.display = "block";
}, 3000);
// contact
const form = document.querySelector('.deals form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('.deals form .form_control');
  const emailAddress = emailInput.value.trim();

  const emailRegex = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.(com|eg)$/;
  if (!emailRegex.test(emailAddress)) {
    // If the email address is invalid, show the error message in the modal
    const errorText = 'Please enter a valid email address (at least 8 alphanumeric characters, ending with ".com" or ".eg").';
    showEmailModal(false, errorText);
  } else {
    // If the email address is valid, show the success message in the modal
    const successText = `Thanks for signing up with email address: ${emailAddress}`;
    showEmailModal(true, successText);
    form.reset();
  }
});

function showEmailModal(isSuccess, text) {
  const modal = document.getElementById('emailModal');
  const modalTitle = document.getElementById('emailModalLabel');
  const modalText = document.getElementById('emailModalText');
  
  if (isSuccess) {
    modalTitle.textContent = 'Subscription Successful';
    modalTitle.classList.remove('text-danger');
    modalTitle.classList.add('text-success');
    modalText.classList.remove('text-danger');
    modalText.classList.add('text-success');
  } else {
    modalTitle.textContent = 'Subscription Failed';
    modalTitle.classList.remove('text-success');
    modalTitle.classList.add('text-light');
    modalText.classList.remove('text-success');
    modalText.classList.add('text-danger');
  }
  
  modalText.textContent = text;
  const emailModal = new bootstrap.Modal(modal);
  emailModal.show();
}
// arrow to top
$(document).ready(function() {
  // show or hide the back-to-top button
  $(window).scroll(function() {
     if ($(this).scrollTop() > 200) {
        $('#back-to-top').fadeIn();
     } else {
        $('#back-to-top').fadeOut();
     }
  });

  // scroll body to top on click
  $('#back-to-top').click(function(event) {
     event.preventDefault();
     $('html, body').animate({scrollTop: 0}, 300);
  })
});

// hosam
var element2 = document.getElementById("Our-games");
        var element = document.getElementById("Online-games");
        function OnlineGame() {

            element2.style.display = 'none';           // Hide
            element.style.display = 'block';
            document.getElementById("bt").style.backgroundColor = ' #105abe';
            document.getElementById("bt2").style.backgroundColor = 'black';

        }
        function OurGame() {
            document.getElementById("bt2").style.backgroundColor = '#105abe';
            document.getElementById("bt").style.backgroundColor = 'black';

            element.style.display = 'none';           // Hide
            element2.style.display = 'block';          // Show
        }



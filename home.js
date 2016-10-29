'use strict';
var signInForm = document.getElementById('send');
function sendButton(event) {
  if (event.target.id === 'send') {
    window.location.href = 'guide.html';
  } else {};
};
signInForm.addEventListener('click', sendButton);

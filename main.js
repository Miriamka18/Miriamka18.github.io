$(document).ready(function () {
    $("form").submit(handleSubmit);
  });
  
  function handleSubmit(event) {
    event.preventDefault();
  
    var msg = $('#msg').val();
    var email = $('#email').val();
    
    console.log(msg);
  }


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('meno').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('msg').value;

  const requestBody = {
    systemEmail: 'miriam.vyrostekova@gmail.com',
    contactEmail: email,
    message: message
  };

  fetch('https://emailsenderitweek.azurewebsites.net/api/ContactForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(data => {
     
      if (data === 'Vstupná systémová e-mailová adresa nie je platná') {
      
      } else if (data === 'Zadaná kontaktná e-mailová adresa nie je platná') {
      
      } else if (data === 'Správa je prázdna, váš požiadavok nebol odoslaný') {
     
      } else if (data === 'E-mail bol odoslaný') {
        
      }
    })
    .catch(error => {
      
      console.error('Error:', error);
    });
});
$(document).ready(function () {
    $("form").submit(handleSubmit);
  });
  
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Input Meno:",$('#meno').val());
    console.log("Input Priezvisko:",$('#priezvisko').val());
    console.log("Input Správa:",$('#msg').val());
    console.log("Input E-mail:",$('#email').val());

    let data = {
      systemEmail: 'miriam.vyrostekova@gmail.com',
      contactEmail: $('#email').val(),
      message: $('#msg').val(),
    };

    let response = await fetch('https://emailsenderitweek.azurewebsites.net/api/ContactForm', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),
  });

  
  let prevTest = $("sbtn").text();
  if (response.status === 200) {
    const res = await response.json();
    $("sbtn").text(res);
    await new Promise(r => setTimeout(r, 2500));
    $("sbtn").text(prevTest);
    if (res === "Email bol odoslaný") document.getElementById("contactForm").reset();
  }
  else{
    $("sbtn").text("Odoslanie zlyhalo");
    await new Promise(r => setTimeout(r, 2500));
    $("sbtn").text(prevTest)
  }
}



function MathQuestion() {
  while (true) {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const correctAnswer = num1 + num2;

    const userAnswer = prompt(`Vypočítaj: ${num1} + ${num2}?`);

    if (parseInt(userAnswer) === correctAnswer) {
      alert('Správna odpoveď. Nie si robot.  ˶ᵔ ᵕ ᵔ˶');
      break; 
    } else {
      alert('Nesprávna odpoveď. Skús ešte raz  • ᴖ • ');
    }
  }
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  MathQuestion();

  form.style.display = "none";
});





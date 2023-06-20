
let number = Math.floor(Math.random() * 101);
let chance = 0;

function guessTheNumber() {
  let input = parseInt(document.getElementById("input2").value);

  if (input === number) {
    document.getElementById("output_comment").textContent = "Congratulations! You entered the right number.";
  } else if (input < number) {
    document.getElementById("output_comment").textContent = `Oh no! You entered ${input}, which is too low. Try again with a greater number.`;
  } else {
    document.getElementById("output_comment").textContent = `Oh no! You entered ${input}, which is too high. Try again with a smaller number.`;
  }

  chance++;
  document.getElementById("chance").textContent = `No. of Guesses: ${chance}`;
}

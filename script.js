document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submitBtn");
  const input = document.getElementById("inputText");
  const outputDiv = document.getElementById("output");

  button.addEventListener("click", function (event) {
    event.preventDefault();
    const inputText = input.value.trim();
    if (inputText === "") {
      outputDiv.textContent = "Please enter a valid input";
    } else {
      const formattedInput = capitalizeFirstLetter(inputText);
      outputDiv.textContent = `you entered : ${formattedInput}`;
    }
  });
  function capitalizeFirstLetter(inputString) {
    return (
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
    );
  }
});



const heading = document.createElement("h2");
heading.id = "verification_heading";
heading.textContent = "Verify Your Account";


const subText = document.createElement("p");
subText.id = "verification_subtext";
subText.textContent = "We emailed you the six digit code to verify your account. Enter the code below to confirm your email address.";


const codeContainer = document.createElement("div");
codeContainer.className = "code-container";


const inputs = [];

for (let i = 0; i < 6; i++) {
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = 1;
  input.className = "code";

  inputs.push(input);
  codeContainer.appendChild(input);
}


document.body.appendChild(heading);
document.body.appendChild(subText);
document.body.appendChild(codeContainer);

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
  });
});

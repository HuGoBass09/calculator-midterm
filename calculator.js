const output = document.getElementById("output");
const form = document.getElementById("calculator_form");
const buttons = form.querySelectorAll("input[type=button]");

let resetDisplay = false;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.value;

    switch (value) {
      case "C":
        output.value = "";
        resetDisplay = false;
        break;

      case "←":
        if (!resetDisplay) {
          output.value = output.value.slice(0, -1);
        }
        break;

      case "±":
        if (output.value) {
          output.value = -parseFloat(output.value);
        }
        break;

      case "%":
        if (output.value) {
          output.value = parseFloat(output.value) / 100;
        }
        break;

      case ".":
        if (!output.value.includes(".")) {
          output.value += value;
        }
        break;

      case "*":
      case "/":
      case "-":
      case "+":
        if (!resetDisplay && output.value && !isNaN(output.value.slice(-1))) {
          output.value += value;
        }
        break;

      case "=":
        try {
          output.value = eval(output.value);
          resetDisplay = true;
        } catch (e) {
          output.value = "Error";
          resetDisplay = true;
        }
        break;

      default:
        if (resetDisplay) {
          output.value = value;
          resetDisplay = false;
        } else {
          output.value += value;
        }
        break;
    }
  });
});

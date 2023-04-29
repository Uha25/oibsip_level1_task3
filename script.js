function convert() {
    const tempInput = document.getElementById("temp-input");
    const tempSelect = document.getElementById("temp-select");
    const result = document.getElementById("result");
  
    if (tempInput.value === "") {
      result.innerHTML = "Please enter a temperature";
      return;
    }
  
    if (tempSelect.value === "celsius") {
      const celsius = parseFloat(tempInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      result.innerHTML = `${celsius}°C = ${fahrenheit}°F`;
    } else if (tempSelect.value === "fahrenheit") {
      const fahrenheit = parseFloat(tempInput.value);
      const celsius = (fahrenheit - 32) * 5/9;
      result.innerHTML = `${fahrenheit}°F = ${celsius}°C`;
    }
  }
  
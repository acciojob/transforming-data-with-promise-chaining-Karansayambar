// script.js

document.getElementById("btn").addEventListener("click", () => {
  // Get input value
  let inputValue = document.getElementById("ip").value;

  // Create a promise that resolves after 2 seconds
  let initialPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  });

  // Chain promises to perform transformations
  initialPromise
    .then((result) => {
      // Print the initial result
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        // Create a promise that multiplies the number by 2
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the multiplied result
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        // Create a promise that subtracts 3 from the number
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the subtracted result
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        // Create a promise that divides the number by 2
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the divided result
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        // Create a promise that adds 10 to the number
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the final result
      document.getElementById("output").textContent = `Result: ${result}`;
    })
    .catch((error) => {
      // Handle any errors that may occur during the promise chain
      console.error(error);
    });
});

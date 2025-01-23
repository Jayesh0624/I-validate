document.addEventListener("DOMContentLoaded", () => {
  const emailForm = document.getElementById("emailForm");
  const resultOutput = document.getElementById("resultOutput");
  const modeToggle = document.getElementById("modeToggle");

  // Replace with your actual API key
  const API_KEY = "ema_live_NiKj6BQ3LcCXdaLfH9MhZuLRE8sswHip4Aa0bgi6";

  // Toggle between light and dark mode
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("black-mode");
    const isBlackMode = document.body.classList.contains("black-mode");
    modeToggle.textContent = isBlackMode ? "🌞" : "🌙"; // Change icon based on the mode
  });

  emailForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const email = document.getElementById("enteremail").value.trim();

    // Check if email is empty
    if (!email) {
      resultOutput.innerHTML = `<div style="color: red;">Please enter a valid email address.</div>`;
      return;
    }

    try {
      // Make the API call
      const response = await fetch(
        `https://api.emailvalidation.io/v1/info?apikey=${API_KEY}&email=${email}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch email validation data");
      }

      const data = await response.json();

      // Display results
      let resultHTML = "<h3>Validation Result:</h3>";
      for (const key in data) {
        resultHTML += `<p><strong>${key}:</strong> ${data[key]}</p>`;
      }
      resultOutput.innerHTML = resultHTML;
    } catch (error) {
      console.error("Error:", error);
      resultOutput.innerHTML = `<div style="color: red;">Error: ${error.message}</div>`;
    }
  });
});






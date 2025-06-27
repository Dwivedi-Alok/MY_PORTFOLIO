function calculateInterest(event) {
    event.preventDefault(); // Prevents form submission and page reload

    // Get values from input fields and convert them to floating-point numbers
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);

    // Validate user input
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById("result").innerHTML = "<p style='color:red;'>Please enter valid numbers!</p>";
        return; // Stops execution if input is invalid
    }

    // Calculate Simple Interest
    let interest = (principal * rate * time) / 100;

    // Display the result
    document.getElementById("result").innerHTML = `<h3>Simple Interest: ${interest}</h3>`;
}


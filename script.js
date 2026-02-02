// Function to handle food orders
function orderFood(itemName) {
    alert(`Thank you for choosing Gourmet Delights! Your order for ${itemName} has been received.`);
}

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! Your message has been sent successfully. We will contact you at ${email} shortly.`);
        this.reset(); // Clear the form
    } else {
        alert("Please fill in all required fields.");
    }
});

function submitForm(event) {
    event.preventDefault();

    // Perform form validation (you can add more complex validation logic)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Perform additional actions (e.g., sending data to a server)
    // For now, let's just log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, clear the form after submission
    document.getElementById('contactForm').reset();
}

document.addEventListener('DOMContentLoaded', function () {
    // Your existing code here...

    // Scroll to Skills section when clicking on the "Skills" link
    const skillsLink = document.querySelector('.nav-link[href="#skills"]');

    if (skillsLink) {
        skillsLink.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    }
});

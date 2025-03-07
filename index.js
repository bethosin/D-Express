// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add Active State to Links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

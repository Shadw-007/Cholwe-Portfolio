// Selecting the menu icon and the navbar elements
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Selecting all sections and navigation links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Event listener for scrolling behavior
window.onscroll = () => {
  // Looping through each section on the page
  sections.forEach((sec) => {
    // Getting the current scroll position
    let top = window.scrollY;
    // Calculating the position of the section relative to the viewport
    let offset = sec.offsetTop - 150; // Adjust offset to trigger a bit before the section starts
    let height = sec.offsetHeight; // Height of the section
    let id = sec.getAttribute("id"); // Getting the id of the current section

    // Check if the section is within the current scroll position
    if (top >= offset && top < offset + height) {
      // Remove 'active' class from all navigation links
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      // Add 'active' class to the corresponding navigation link based on section id
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
};

// Event listener for menu icon click (for mobile views)
menuIcon.onclick = () => {
  // Toggle the 'bx-x' class to change the menu icon (e.g. to an 'X' when active)
  menuIcon.classList.toggle("bx-x");
  // Toggle the 'active' class to show or hide the navbar
  navbar.classList.toggle("active");
};

/*======== scroll reveal ========= */
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 100,
});

ScrollReveal().reveal(".content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .timeline-items, .services-container, .certifications-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .home-content h3", { origin: "left" });
ScrollReveal().reveal(".content h3, .content p, .about-content", {
  origin: "right",
});

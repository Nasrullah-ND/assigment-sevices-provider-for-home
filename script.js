
// footer
// JSON object containing footer content
const footerContent = {
    "contact": {
      "address": "karachi pakistan, 7400",
      "email": "Khadimo@gmail.com",
      "phone": "+1 234 567 890"
    },
    "socialMedia": [
      { "name": "Facebook", "link": "#" },
      { "name": "Twitter", "link": "#" },
      { "name": "Instagram", "link": "#" }
    ]
  };
  
  // Function to populate footer with JSON data
  function populateFooter() {
    const footerContentDiv = document.getElementById("footerContent");
    
    // Create contact information
    const contactDiv = document.createElement("div");
    contactDiv.className = "col-md-6";
    contactDiv.innerHTML = `
      <h3>Contact Us</h3>
      <p>${footerContent.contact.address}</p>
      <p>Email: ${footerContent.contact.email}</p>
      <p>Phone: ${footerContent.contact.phone}</p>
    `;
    footerContentDiv.appendChild(contactDiv);
    
    // Create social media links
    const socialMediaDiv = document.createElement("div");
    socialMediaDiv.className = "col-md-6";
    socialMediaDiv.innerHTML = "<h3>Follow Us</h3><ul class='list-inline'>";
    footerContent.socialMedia.forEach(platform => {
      socialMediaDiv.innerHTML += `<li class='list-inline-item'><a href='${platform.link}'>${platform.name}</a></li>`;
    });
    socialMediaDiv.innerHTML += "</ul>";
    footerContentDiv.appendChild(socialMediaDiv);
  }
  
  // Call function to populate footer when the DOM is ready
  document.addEventListener("DOMContentLoaded", populateFooter);
// silder js
  const slider = document.querySelector('#slider');
  const sliderUl = slider.querySelector('ul');
  const slides = sliderUl.querySelectorAll('li');
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    currentIndex = index;
    sliderUl.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  function nextSlide() {
    if (currentIndex === slides.length - 1) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  }

  setInterval(nextSlide, 3000); // Auto advance every 3 seconds
  // silder js end
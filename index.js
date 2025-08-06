const elements = document.querySelectorAll('.fade-in , .fade-whu ,.fade-faq ,.contact-ani1 ,.contact-ani2 , .service-list ,.items');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }


    });
  });

  elements.forEach(el => observer.observe(el));

/* why choose us */

/* const elements1 = document.querySelectorAll('.fade-inw');

const observer1 = new IntersectionObserver((entriesw) => {
    entriesw.forEach(entryw => {
      if (entryw.isIntersecting) {
        entryw.target.classList.add('visiblew');
      }
    });
  });

  elements1.forEach(elw => observer1.observe(elw));
 */
/* 
const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add animation
      } else {
        entry.target.classList.remove('visible'); // Remove when out of view
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% is visible
  });

  elements.forEach(el => observer.observe(el)); */

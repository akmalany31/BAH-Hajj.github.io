AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    // Fetch navbar.html
    fetch('frontend/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      });
  
    // Fetch hero.html
    fetch('frontend/hero.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('hero-placeholder').innerHTML = data;
      });

     // Fetch offers.html
    fetch('frontend/offers.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('offers-placeholder').innerHTML = data;
    }); 
    
    // Fetch services.html
    fetch('frontend/services.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('services-placeholder').innerHTML = data;
    }); 

    // Fetch inklusif.html
    fetch('frontend/inklusif.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('inklusif-placeholder').innerHTML = data;
    }); 

    // Fetch footer.html
    fetch('frontend/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    }); 
  });
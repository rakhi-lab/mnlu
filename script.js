// scroll up
  const scrollBtn = document.getElementById('scrollTopBtn');

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  };

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


// admission form popup
function showPopup() {
  document.getElementById("admissionPopup").style.display = "flex";
}
function closePopup() {
  document.getElementById("admissionPopup").style.display = "none";
}
setTimeout(showPopup, 5000);


// theme change plate 
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const colorPalette = document.getElementById("colorPalette");
  const themeOptions = document.querySelectorAll(".theme-option");

  // Toggle Palette Display
  themeToggleBtn.addEventListener("click", function () {
    colorPalette.style.display =
      colorPalette.style.display === "none" || colorPalette.style.display === ""
        ? "block"
        : "none";
  });

  // Apply Theme Colors
  themeOptions.forEach(option => {
    option.addEventListener("click", function () {
      const dark = this.getAttribute("data-dark");
      const sky = this.getAttribute("data-sky");
      const light = this.getAttribute("data-light");
      const secondary = this.getAttribute("data-secondary");
      const text = this.getAttribute("data-text");

      document.documentElement.style.setProperty("--primary-dark", dark);
      document.documentElement.style.setProperty("--primary-sky", sky);
      document.documentElement.style.setProperty("--primary-light", light);
      document.documentElement.style.setProperty("--primary-secondary", secondary);
      document.documentElement.style.setProperty("--primary-text", text);

      document.body.style.background = light;
      document.body.style.color = text;

      colorPalette.style.display = "none";
    });
  });
});

// share 
function toggleShare() {
  const socialIcons = document.getElementById('socialIcons');
  socialIcons.classList.toggle('show');
}

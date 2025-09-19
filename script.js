// navbar dropdown

document.addEventListener("DOMContentLoaded", function () {
  // Toggle submenus on mobile
  document.querySelectorAll('.dropdown-submenu > a').forEach(function (element) {
    element.addEventListener('click', function (e) {
      if (window.innerWidth < 992) { // Only on mobile
        e.preventDefault();
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('dropdown-menu')) {
          nextEl.classList.toggle('show');

          // Close other submenus at same level
          let parentMenu = this.closest('.dropdown-menu');
          parentMenu.querySelectorAll('.dropdown-menu.show').forEach(function (submenu) {
            if (submenu !== nextEl) submenu.classList.remove('show');
          });
        }
      }
    });
  });

  // Close all dropdowns when navbar collapses
  document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
      menu.classList.remove('show');
    });
  });
});


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

// scrollWrappers
const scrollWrappers = document.querySelectorAll('.scroll-wrapper');

scrollWrappers.forEach(wrapper => {
  const content = wrapper.querySelector('.scroll-content');
  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 1;
    if (scrollAmount >= content.scrollHeight - wrapper.clientHeight) {
      scrollAmount = 0;
    }
    wrapper.scrollTop = scrollAmount;
  }, 50); 
})


// navbar

  document.addEventListener('DOMContentLoaded', function () {
    const submenus = document.querySelectorAll('.dropdown-submenu');

    submenus.forEach(submenu => {
      submenu.addEventListener('mouseenter', function () {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        if (!dropdownMenu) return;

        // Reset previous class
        this.classList.remove('dropdown-flip-left');

        const rect = dropdownMenu.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        // If submenu will overflow the viewport
        if (rect.right > viewportWidth) {
          this.classList.add('dropdown-flip-left');
        }
      });
    });
  });

  // stay conected
document.querySelectorAll('#socialTab a').forEach(link => {
  link.addEventListener('dblclick', function () {
    // Double click -> Official page open
    let url = this.getAttribute('data-url');
    window.open(url, '_blank');
  });
});

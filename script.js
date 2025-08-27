
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

// scroll bar

  let lastScrollTop = 0;
  let scrollbarStyle = document.createElement('style');
  document.head.appendChild(scrollbarStyle);

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    // Expand scrollbar on scroll
    scrollbarStyle.innerHTML = `
      ::-webkit-scrollbar {
        width: ${scrollTop > lastScrollTop ? '14px' : '12px'};
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #2795c4, #1d759d);
        box-shadow: ${scrollTop > lastScrollTop ? '0 0 12px rgba(39,149,196,0.7)' : 'none'};
      }
    `;

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });


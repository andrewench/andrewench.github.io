(function () {
  'use strict';

  window.addEventListener('load', () => {
    let header = document.querySelector('.App-Header');
    let scrollState = 0;

    document.addEventListener('scroll', (e) => {
      let dirTo = 0;

      if (window.scrollY > 200) {
        window.scrollY > scrollState ? (dirTo = 1) : (dirTo = -1);
        scrollState = window.scrollY;

        if (dirTo === 1) {
          if (header.classList.contains('animate__fadeIn'))
            header.classList.remove('animate__fadeIn');

          header.classList.add('animate__fadeOut');
          header.onanimationend = () => {
            header.classList.add('hidden', 'sticky');
          };
        } else {
          header.onanimationend = null;
          header.classList.remove('hidden', 'animate__fadeOut');
          header.classList.add('animate__fadeIn');
        }
      } else {
        if (header.classList.contains('sticky'))
          header.classList.remove('sticky');
      }
    });
  });
})();

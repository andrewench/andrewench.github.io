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
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }

        if (!header.classList.contains('sticky'))
          header.classList.add('sticky');
      } else {
        if (header.classList.contains('sticky'))
          header.classList.remove('sticky');
      }
    });
  });
})();

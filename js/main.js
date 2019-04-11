window.addEventListener('load', () => {
  var header_heading = document.querySelector('#header-heading');
  var header_body_text = document.querySelector('#header-body-text');

  setTimeout(() => {
    header_heading.classList.add('fadeIn');
    header_body_text.classList.add('fadeIn');
  }, 500);
}, false);
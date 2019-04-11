window.addEventListener('load', () => {
  var profile_img = document.querySelector('#profile-img');
  var header_heading = document.querySelector('#header-heading');
  var header_body_text = document.querySelector('#header-body-text');

  profile_img.style.opacity = 1;
  setTimeout(() => {
    header_heading.style.opacity = 1;
    header_body_text.style.opacity = 1;
  }, 500);
}, false);
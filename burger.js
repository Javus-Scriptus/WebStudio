document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.header').classList.toggle('open');

  if (document.body.classList.contains('no-scroll')) {
    document.body.classList.remove('no-scroll');
  } else {
    document.body.classList.add('no-scroll');
  }
});

// modal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalBackdrop: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modalBackdrop.classList.remove('is-hidden');
    refs.modalBackdrop.classList.add('is-visible');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    refs.modalBackdrop.classList.remove('is-visible');
    setTimeout(() => {
      refs.modalBackdrop.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
    }, 500); // Час має збігатися з CSS transition
  }
})();

// burger menu
document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.header-nav').classList.toggle('open');
});
/* (() => {
              const refs = {
                  openModalBtn: document.querySelector("[data-modal-open]"),
                  closeModalBtn: document.querySelector("[data-modal-close]"),
                  modal: document.querySelector("[data-modal]"),
              };

              refs.openModalBtn.addEventListener("click", toggleModal);
              refs.closeModalBtn.addEventListener("click", toggleModal);

              function toggleModal() {
                  refs.modal.classList.toggle("is-open")
                  refs.modal.classList.toggle("is-hidden");
                  document.body.classList.toggle("no-scroll");
              }
          })(); */

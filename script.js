// // (() => {
// //     const refs = {
// //       openModalBtn: document.querySelector("[btn-open]"),
// //       closeModalBtn: document.querySelector("[data-modal-close]"),
// //       modal: document.querySelector("[data-modal]"),
// //     };

// //     refs.openModalBtn.addEventListener("click", toggleModal);
// //     refs.closeModalBtn.addEventListener("click", toggleModal);

// //     function toggleModal() {
// //       refs.modal.classList.toggle("is-hidden");
// //       document.body.classList.toggle("no-scroll");
// //     }
// //   })();

// const modalDiv = document.querySelector("#modal-window")
// const modalButton = document.querySelector("#button-open")

//     modalDiv.computedStyleMap.display = "flex"
// const buttonCloseModal = document.querySelector("#button-close")
// buttonCloseModal.addEventListener("click", () => {
//     modalDiv.computedStyleMap.display = "none"
// })

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
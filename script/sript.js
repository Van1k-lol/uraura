const buttonOpenReg = document.querySelector(".registration");
const modalWind = document.querySelector(".modal__login");
const modalRegWind = document.querySelector(".modal__register");
const buttonOpenLog = document.querySelector(".login");
const headerClose = document.querySelector("wrap header__wrap");
const crossCloseReg = document.querySelector(".modal__button--img");
const crossCloseReg1 = document.querySelector(".modal__button--img1");
const modalCheckbox = document.getElementById("regCheckbox");
const modalColBox = document.getElementById("modalButtonSign");
const modalContainerBox = document.getElementById("modBtnContainer");
const modalLoginEmailInput = document.getElementById("modal-login-email");
const modalLoginEmailPassword = document.getElementById("password");
const closedEye = document.getElementById("password2-img");
let isModalLogOpen = 0;
let isModalRegOpen = 0;

modalWind.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;

`;
modalRegWind.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;

`;

document.querySelectorAll(".modal__input--toggle").forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    const wrapper = toggleBtn.closest(".modal__input--wrapper");
    if (!wrapper) return;

    const input = wrapper.querySelector("input");
    const img = toggleBtn.querySelector("img");

    if (!input || !img) return;

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";

    img.src = isPassword
      ? "./assets/img/main/main_reg/eye-2.svg"
      : "./assets/img/main/main_reg/eye-1.svg";
  });
});
const closeModal = (event) => {
  const target = event.target;
  if (target === modalWind || target === crossCloseReg) {
    modalWind.style.visibility = "hidden";
    modalWind.style.opacity = 0;
    // modalWind.style.display = "none"
    document.body.classList.remove("modal-open");
    modalLoginEmailInput.value = "";
    modalLoginEmailPassword.value = "";
    modalContainerBox.classList.remove("checked");
    modalColBox.classList.remove("checked");
  } else if (target === modalRegWind || target === crossCloseReg1) {
    modalRegWind.style.visibility = "hidden";
    modalRegWind.style.opacity = 0;
    // modalRegWind.style.display = "none"
    document.body.classList.remove("modal-open");
    modalLoginEmailInput.value = "";
    modalLoginEmailPassword.value = "";
    modalContainerBox.classList.remove("checked");
    modalColBox.classList.remove("checked");
  }
};

const openModal = () => {
  modalWind.style.visibility = "visible";
  modalWind.style.opacity = 1;
  document.body.classList.add("modal-open");
};

const openRegModal = () => {
  modalRegWind.style.visibility = "visible";
  modalRegWind.style.opacity = 1;
  document.body.classList.add("modal-open");
};
const closeRegModal = (event = {});

buttonOpenReg.addEventListener("click", openRegModal);
buttonOpenLog.addEventListener("click", openModal);
modalWind.addEventListener("click", closeModal);
crossCloseReg.addEventListener("click", closeModal);
crossCloseReg1.addEventListener("click", closeModal);
modalRegWind.addEventListener("click", closeModal);
// headerClose.addEventListener("click", closeModal)
// modalCheckbox.addEventListener("change", () => {
//      if (modalCheckbox.checked) {
//          modalColBox.classList.add('checked');
//          modalContainerBox.classList.add('checked');

//   } else {
//      modalContainerBox.classList.remove('checked');
//     modalColBox.classList.remove('checked');
//   }
// })
modalLoginEmailInput.addEventListener("input", () => {
  if (
    modalLoginEmailInput.value.length !== 0 &&
    modalLoginEmailPassword.value.length !== 0
  ) {
    modalColBox.classList.add("checked");
    modalContainerBox.classList.add("checked");
  } else {
    modalContainerBox.classList.remove("checked");
    modalColBox.classList.remove("checked");
  }
});
modalLoginEmailPassword.addEventListener("input", () => {
  if (
    modalLoginEmailInput.value.length !== 0 &&
    modalLoginEmailPassword.value.length !== 0
  ) {
    modalColBox.classList.add("checked");
    modalContainerBox.classList.add("checked");
  } else {
    modalContainerBox.classList.remove("checked");
    modalColBox.classList.remove("checked");
  }
});

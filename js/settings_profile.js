
// ================== ДАННЫЕ ==================


const btnApply = document.getElementById('button__apply');
btnApply.addEventListener('click', () => {
  btnApply.classList.add('disable');
  const textEl = btnApply.querySelector('.text__modal__balance__button');
  if (textEl) {
    textEl.textContent = 'Письмо отправлено';
  }
  setTimeout(() => {
    window.location.href = '../letter_sent.html';
  }, 3000);
});

const dataContentChanger = document.querySelector('.data__content__changer')
const dataContent = document.querySelector('.data__content')
const changeDataBtn = document.getElementById('changeData')
changeDataBtn.addEventListener('click', () => {
  changeDataBtn.style.display = 'none';
  dataContent.style.display = 'none';
  dataContentChanger.style.display = 'block';
})

const namelabel = document.getElementById('nameLabel')
const emailLabel = document.getElementById('emailLabel')
const nameText = document.getElementById('top__text__desc1')
const emailText = document.getElementById('top__text__desc2')
const inputName = document.getElementById('nameChangeInput');
const inputEmail = document.getElementById('emailChangeInput');
inputName.value = nameText.textContent.trim();
inputEmail.value = emailText.textContent.trim();
const checkInputName = inputName.value;
const checkInputEmail = inputEmail.value;
const btnBack = document.getElementById('btnBack')
const btnSave = document.getElementById('btnSave')
function toggleLabel(input, label) {
  if (input.value.trim() === '') {
    label.style.display = 'none';
    input.style.padding = '16px 20px'; // без верхнего отступа, если нужно
  } else {
    label.style.display = 'block';
    input.style.padding = '24px 20px 8px 20px';
  }
}

function activeSave(input, label) {
  if (input.value.trim() !== checkInputEmail) {
    btnSave.classList.remove('disable')
  }
  else if (input.value.trim() === checkInputEmail) {
    btnSave.classList.add('disable')
  }
}

toggleLabel(inputName, namelabel);
toggleLabel(inputEmail, emailLabel);

// Обработка ввода
inputName.addEventListener('input', () => toggleLabel(inputName, namelabel));
inputName.addEventListener('input', () => activeSave(inputName, namelabel));
inputEmail.addEventListener('input', () => toggleLabel(inputEmail, emailLabel));
inputEmail.addEventListener('input', () => {
  activeSave(inputEmail, emailLabel);
});


btnBack.addEventListener('click', () => {
  changeDataBtn.style.display = 'block';
  dataContent.style.display = 'block';
  dataContentChanger.style.display = 'none';
})
btnSave.addEventListener('click', () => {
  changeDataBtn.style.display = 'block';
  dataContent.style.display = 'block';
  dataContentChanger.style.display = 'none';
  emailText.textContent = inputEmail.value;
})



// =================ПАРОЛЬ===================



const changePasswordBtn = document.getElementById('changePassword');
const changePasswordContainer = document.querySelector('.change__password__container');
const passwordContent = document.querySelector('.password__bottom');
const btnSave1 = document.getElementById('btnSave1');
const btnBack1 = document.getElementById('btnBack1');

const currentPasswordInput = document.getElementById('currentPassword');
const newPasswordInput = document.getElementById('newPassword');
const repeatPasswordInput = document.getElementById('repeatPassword');
const errorText = document.getElementById('passwordError');

// Показать блок смены пароля
changePasswordBtn.addEventListener('click', () => {
  changePasswordBtn.style.display = 'none';
  passwordContent.style.display = 'none';
  changePasswordContainer.style.display = 'flex';
});

// Скрыть блок смены пароля (отмена)
btnBack1.addEventListener('click', () => {
  resetForm();
});

// Проверка заполненности и длины
function validateInputs() {
  const currentVal = currentPasswordInput.value.trim();
  const newVal = newPasswordInput.value.trim();
  const repeatVal = repeatPasswordInput.value.trim();

  const allFilled = currentVal && newVal && repeatVal;
  const minLengthOK = newVal.length >= 8 && repeatVal.length >= 8;

  if (allFilled && minLengthOK) {
    btnSave1.classList.remove('disable');
  } else {
    btnSave1.classList.add('disable');
  }

  errorText.style.display = 'none';
  newPasswordInput.classList.remove('input-error');
  repeatPasswordInput.classList.remove('input-error');
}

// Слушаем ввод
[currentPasswordInput, newPasswordInput, repeatPasswordInput].forEach((input) => {
  input.addEventListener('input', validateInputs);
});

// Клик на кнопку "Сохранить"
btnSave1.addEventListener('click', () => {
  if (btnSave1.classList.contains('disable')) return;

  const newVal = newPasswordInput.value.trim();
  const repeatVal = repeatPasswordInput.value.trim();

  if (newVal !== repeatVal) {
    errorText.style.display = 'block';
    newPasswordInput.classList.add('input-error');
    repeatPasswordInput.classList.add('input-error');
  } else {
    errorText.style.display = 'none';
    newPasswordInput.classList.remove('input-error');
    repeatPasswordInput.classList.remove('input-error');

    // Условно: сохранение прошло успешно — скрываем форму
    resetForm();
    console.log('✅ Пароль успешно изменён');
  }
});

// Глазики
document.querySelectorAll('.toggle-password').forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    const wrapper = eyeIcon.closest('.input-wrapper');
    const input = wrapper.querySelector('input');

    if (!input) return;

    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';

    eyeIcon.src = isPassword
      ? './assets/img/main/main_reg/eye-2.svg'
      : './assets/img/main/main_reg/eye-1.svg';
  });
});

// Функция сброса состояния
function resetForm() {
  changePasswordContainer.style.display = 'none';
  passwordContent.style.display = 'block';
  changePasswordBtn.style.display = 'block';

  currentPasswordInput.value = '';
  newPasswordInput.value = '';
  repeatPasswordInput.value = '';

  btnSave1.classList.add('disable');
  errorText.style.display = 'none';

  newPasswordInput.classList.remove('input-error');
  repeatPasswordInput.classList.remove('input-error');

  // Сброс типов на password
  [currentPasswordInput, newPasswordInput, repeatPasswordInput].forEach(input => input.type = 'password');

  // Сброс глазиков
  document.querySelectorAll('.toggle-password').forEach(eyeIcon => {
    eyeIcon.src = './assets/img/main/main_reg/eye-1.svg';
  });
}









// ===============ПЕРСОНАЛЬНЫЕ ДАННЫЕ=========================




const yearSelect = document.getElementById('birthYear');

const currentYear = new Date().getFullYear();

for (let i = 0; i < 150; i++) {
  const year = currentYear - i;
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

const daySelect = document.getElementById('birthDay');

// Добавим первую заглушку
const placeholder = document.createElement('option');
placeholder.disabled = true;
placeholder.selected = true;
placeholder.textContent = 'Число';
daySelect.appendChild(placeholder);

// Генерация чисел от 1 до 31
for (let i = 1; i <= 31; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  daySelect.appendChild(option);
}

const customSelects = document.querySelectorAll('.custom-select select');

customSelects.forEach((select) => {
  select.addEventListener('change', () => {
    if (select.value !== '') {
      select.classList.add('selected');
    }
  });
});



const changePersonalContainer = document.querySelector('.change__personal__container')
const formGrid = document.querySelector('.form-grid')
const changePersonalData = document.getElementById('changePersonalData')
changePersonalData.addEventListener('click', () => {
  changePersonalData.style.display = 'none';
  formGrid.style.display = 'none';
  changePersonalContainer.style.display = 'block';
});

const btnBack2 = document.getElementById('btnBack2')


btnBack2.addEventListener('click', () => {
  changePersonalData.style.display = 'block';
  formGrid.style.display = 'grid';
  changePersonalContainer.style.display = 'none';
});


const inputs = document.querySelectorAll('.input-wrapper1 input');
const selects = document.querySelectorAll('.custom-select select');
const btnSave2 = document.getElementById('btnSave2');

function isSelectValid(select) {
  return select.value !== '' && !select.options[select.selectedIndex].disabled;
}

function checkForm() {
  const allInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
  const allSelectsChosen = Array.from(selects).every(isSelectValid);
  console.log('Inputs:', allInputsFilled, 'Selects:', allSelectsChosen);
  if (allInputsFilled && allSelectsChosen) {
    btnSave2.classList.remove('disable');
  } else {
    btnSave2.classList.add('disable');
  }
}

// Следим за всеми инпутами и селектами
inputs.forEach(input => {
  input.addEventListener('input', checkForm);
});

selects.forEach(select => {
  select.addEventListener('change', checkForm);
});
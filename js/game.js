const viewButtons = document.querySelectorAll('.button__view');
const gameImg = document.querySelector('.game__img');
const mainTop = document.querySelector('.main_top');
const main = document.querySelector('.main');
const changeView = document.querySelectorAll('.button__view');
const openModalButton = document.getElementById("modalButtonSign");
const openModalButtonFB = document.getElementById("modalButtonSign1")





let isFullScreen = false;

// Слушатели на кнопки вида
viewButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    viewButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (index === 1) {
      // Полноэкранный режим
      gameImg.classList.add('fullscreen');
      main.classList.add('fullscreen-mode');
      isFullScreen = true;
      mainTop.classList.add('active')
    } else {
      // Обычный режим
      gameImg.classList.remove('fullscreen');
      main.classList.remove('fullscreen-mode');
      mainTop.style.top = '0'; // возвращаем панель
      mainTop.classList.remove('active')
      isFullScreen = false;
    }
  });
});

// Показывать верхнюю панель при наведении вверх
document.addEventListener('mousemove', (e) => {
  if (isFullScreen) {
    if (e.clientY < 80) {
      mainTop.style.top = '0';
    } else {
      mainTop.style.top = '-100px';
    }
  }
});

const favButtons = document.querySelectorAll('.fav-btn');
const svg1 = document.querySelector('.view-svg1')
const svg2 = document.querySelector('.view-svg2')
changeView.forEach(button => {
  button.addEventListener('click', () => {
    if(button.querySelector('svg.view-svg2')){
      svg2.setAttribute('fill', '#e8b21d'); 
      svg1.setAttribute('fill', '#a68e62'); // Возвращаем обратно
    }
    else{
      svg1.setAttribute('fill', '#e8b21d');
      svg2.setAttribute('fill', '#a68e62')
    }
  });
});


function initBalanceModal() {
  const bodyHtml =document.getElementsByTagName("body")
  const depositTab = document.getElementById("tab1");
  const withdrawTab = document.getElementById("tab2");
  const historyTab = document.getElementById("tab3");
  const modalHTML = document.getElementById("modal-switch");
  const withdrawBody = document.getElementById("modal-withdraw-body");
  const historyBody = document.getElementById("modal-history-body");
  const cryptoSubtab = document.getElementById("crypto-subtab");
  const subtabsOffOn = document.getElementById("depositModalSubtabs");
  const inputBoxRedirect = document.getElementsByClassName("input-box");
  const depositWindowHTML = document.getElementById("depositWindow");
  const tabsOffOn = document.getElementsByClassName("modal-tabs-wrap");
  const backButtonFDep = document.getElementById("back-button1");
  const amountButton500 = document.getElementById("button500");
  const amountButton1500 = document.getElementById("button1500");
  const amountButton2500 = document.getElementById("button2500");
  const amountButton5000 = document.getElementById("button5000");
  const depositInputW = document.getElementById("deposit-window-input");
  const closeModalCross = document.getElementById("modal-tabs-cross");
  const modalOverlayBalance = document.getElementById("modal-balance-overlay");
  const openWithdrawTab = () => {
    console.log("update")
    depositTab.classList.remove('active')
    historyTab.classList.remove("active")
    withdrawTab.classList.add("active")
    cryptoSubtab.classList.remove("unactive")
    for (let tab of tabsOffOn) {
      tab.classList.remove  ("hidden")
    }
    withdrawBody.classList.remove("hidden")
    modalHTML.classList.add("hidden")
    historyBody.classList.add("hidden")
    subtabsOffOn.classList.remove("hidden")
    depositWindowHTML.classList.add("hidden")
    document.body.classList.add("modal-open")
    console.log("added")
  }
  const openDepositTab = () => {
  withdrawTab.classList.remove("active")
    historyTab.classList.remove("active")
    depositTab.classList.add("active")
   cryptoSubtab.classList.add("unactive")
  
    modalHTML.classList.remove("hidden")
    withdrawBody.classList.add("hidden")
    historyBody.classList.add("hidden")
    subtabsOffOn.classList.remove("hidden")
  }
  const openHistoryTab = () => {
  withdrawTab.classList.remove("active")
  depositTab.classList.remove("active")
    historyTab.classList.add("active")
  
     modalHTML.classList.add("hidden")
    withdrawBody.classList.add("hidden")
    historyBody.classList.remove("hidden")
    subtabsOffOn.classList.add("hidden")
  
  }
  const depositWindow = () => {
    withdrawBody.classList.add("hidden")
    modalHTML.classList.add("hidden")
    historyBody.classList.add("hidden")
    subtabsOffOn.classList.add("hidden")
    depositWindowHTML.classList.remove("hidden")

  
    for (let tab of tabsOffOn) {
      tab.classList.add("hidden")
    }
  
  }
  
  const closeDepositModalWindow = () => {
    modalOverlayBalance.classList.add("hidden")
  }
  const openDepositModalWindow = () => {
    console.log("clicked")
    modalOverlayBalance.classList.remove("hidden")
    console.log('removed')
    openDepositTab();
    console.log("opened")
  
  }
  // Показать модалку
  depositTab?.addEventListener("click",openDepositTab())
  openModalButton.addEventListener("click", () => {
    modalOverlayBalance?.classList.remove("hidden");
  });
  if (openModalButtonFB){  openModalButtonFB.addEventListener("click", () => {
    modalOverlayBalance?.classList.remove("hidden");
  });}

  depositTab.addEventListener("click",openDepositTab)
  
  withdrawTab.addEventListener("click", openWithdrawTab)
  historyTab.addEventListener("click", openHistoryTab)
  // inputBoxRedirect.addEventListener("click", depositWindow)
  for (let box of inputBoxRedirect) {
    box.addEventListener("click", depositWindow)
  }
  backButtonFDep.addEventListener("click", () => {
   openWithdrawTab()
  })
  
  amountButton500.addEventListener("click", () => {
    depositInputW.value = "500"
  })
  amountButton1500.addEventListener("click", () => {
    depositInputW.value = "1500"
  })
  amountButton2500.addEventListener("click", () => {
    depositInputW.value = "2500"
  })
  amountButton5000.addEventListener("click", () => {
    depositInputW.value = "5000"
  })
  closeModalCross.addEventListener("click", closeDepositModalWindow)
  openModalButton.addEventListener("click", openDepositModalWindow)
}



document.addEventListener('DOMContentLoaded', () => {
  fetch('modal-balance.html')
    .then(res => res.text()) // Преобразуем ответ в текст
    .then(html => {
      document.getElementById('modalContainerJs').innerHTML = html;
      initBalanceModal();
    })
})

const depositTab = document.getElementById("tab1");
const withdrawTab = document.getElementById("tab2");
const historyTab = document.getElementById("tab3");
const modalHTML = document.getElementById("modal-switch");
const withdrawBody = document.getElementById("modal-withdraw-body");
const historyBody = document.getElementById("modal-history-body");
const cryptoSubtab = document.getElementById("crypto-subtab");
const subtabsOffOn = document.getElementById("depositModalSubtabs");
const inputBoxRedirect = document.getElementsByClassName("input-box");
const depositWindowHTML = document.getElementById("depositWindow");
const tabsOffOn = document.getElementsByClassName("modal-tabs-wrap");
const backButtonFDep = document.getElementById("back-button1");
console.log(withdrawBody)
const amountButton500 = document.getElementById("button500");
const amountButton1500 = document.getElementById("button1500");
const amountButton2500 = document.getElementById("button2500");
const amountButton5000 = document.getElementById("button5000");
const depositInputW = document.getElementById("deposit-window-input");
const closeModalCross = document.getElementById("modal-tabs-cross");
const modalOverlayBalance = document.getElementById("modal-balance-overlay");

console.log(amountButton500);







// ==========================модалка хедер================
// ==========================модалка хедер================
// ==========================модалка хедер================
// ==========================модалка хедер================
// ==========================модалка хедер================
// ==========================модалка хедер================







const balanceWrapper =  document.querySelector('.balance-wrapper')
  const btn = document.getElementById('balanceButton');
  const modal = document.getElementById('balanceModal');
const arrowIcon = document.querySelector('.arrow-icon')
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    balanceWrapper.classList.toggle('active')
    modal.classList.toggle('hidden');
    btn.classList.toggle('active')
    arrowIcon.classList.toggle('active')
  });

  document.addEventListener('click', () => {
    modal.classList.add('hidden');
    balanceWrapper.classList.remove('active')
    btn.classList.remove('active')
    arrowIcon.classList.remove('active')
  });

  modal.addEventListener('click', (e) => e.stopPropagation());

// depositTab.addEventListener("click",openDepositTab)
  
// withdrawTab.addEventListener("click", openWithdrawTab)
// historyTab.addEventListener("click", openHistoryTab)
// // inputBoxRedirect.addEventListener("click", depositWindow)
// for (let box of inputBoxRedirect) {
//   box.addEventListener("click", depositWindow)
// }
// backButtonFDep.addEventListener("click", () => {
//  openWithdrawTab()
// })

// amountButton500.addEventListener("click", () => {
//   depositInputW.value = "500"
// })
// amountButton1500.addEventListener("click", () => {
//   depositInputW.value = "1500"
// })
// amountButton2500.addEventListener("click", () => {
//   depositInputW.value = "2500"
// })
// amountButton5000.addEventListener("click", () => {
//   depositInputW.value = "5000"
// })
// closeModalCross.addEventListener("click", closeDepositModalWindow)
// openModalButton.addEventListener("click", openDepositModalWindow)
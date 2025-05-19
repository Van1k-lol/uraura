const Btn = document.querySelector('.conditions');
const conditionsList = document.querySelector('.conditions__list');
Btn.addEventListener('click', () => {
  if (conditionsList.classList.contains('active')) {
    conditionsList.classList.remove('active');
    Btn.classList.remove('active');
  } else {
    conditionsList.classList.add('active');
    Btn.classList.add('active');
  }
})
// ЧАТ


// открытие чата

document.querySelector('.link_chat').addEventListener('click', () => {
  const chat = document.getElementById('chat');
  const chatBody = document.getElementById('chat-body');

  chat.style.display = 'flex';

  // Нужно подождать, пока DOM отобразит элемент
  requestAnimationFrame(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
  });
});
document.querySelector('.chat__close').addEventListener('click', () => {
  document.getElementById('chat').style.display = 'none';
})
// отправка сообщений
function sendMessage() {
    const input = document.getElementById('chat-message');
    const text = input.value.trim();
    if (text) {
      const chatBody = document.getElementById('chat-body');
      const p = document.createElement('p');
      p.textContent = text;
      chatBody.appendChild(p);
      input.value = '';
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
document.getElementById('chat-message').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});


  const chat = document.getElementById('chat');
  const resizers = chat.querySelectorAll('.resizer');
  let isResizing = false;
  let currentResizer;
  let prevX, prevY;

  resizers.forEach(resizer => {
    resizer.addEventListener('mousedown', (e) => {
      isResizing = true;
      currentResizer = resizer;
      prevX = e.clientX;
      prevY = e.clientY;
      e.preventDefault();
    });
  });

  window.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

    const rect = chat.getBoundingClientRect();
    if (currentResizer.classList.contains('right')) {
      chat.style.width = rect.width + (e.clientX - prevX) + 'px';
    }
    if (currentResizer.classList.contains('left')) {
      chat.style.width = rect.width - (e.clientX - prevX) + 'px';
      chat.style.left = rect.left + (e.clientX - prevX) + 'px';
    }
    if (currentResizer.classList.contains('bottom')) {
      chat.style.height = rect.height + (e.clientY - prevY) + 'px';
    }
    if (currentResizer.classList.contains('top')) {
      chat.style.height = rect.height - (e.clientY - prevY) + 'px';
      chat.style.top = rect.top + (e.clientY - prevY) + 'px';
    }

    prevX = e.clientX;
    prevY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isResizing = false;
  });
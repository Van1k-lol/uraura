document.querySelectorAll('.toggleBtn').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');

    const toggleContainer = toggle.closest('.toggle-container');
    if (!toggleContainer) return;

    const toggleText = toggleContainer.querySelector('.toggle-text');
    if (toggleText) {
      toggleText.textContent = toggle.classList.contains('active') ? 'Свернуть' : 'Развернуть';
    }

    const gamesTop = toggle.closest('.games_top');
    if (!gamesTop) return;

    const gamesWrap = gamesTop.parentElement; 
    if (!gamesWrap) return;

    const gamesBottom = gamesWrap.querySelector('.games_bottom');
    if (gamesBottom) {
      gamesBottom.classList.toggle('hidden');
    }
  });
});



const modal = document.getElementById('gameModal');
const openBtn = document.querySelector('.search');
const closeBtn = document.querySelector('.modal__search__close');
const searchInput = document.getElementById('searchInput');
const gamesGrid = document.getElementById('gamesGrid');
const resultsText = document.querySelector('.modal__search__results');
const notFound = document.querySelector('.not__found');

const games = [
  { name: 'Rise of Merlin', img: './assets/img/main/main/riseOfMerlin.png' },
  { name: '40 Joker Staxx', img: './assets/img/main/main/games/40_joker.png' },
  { name: 'Sevens & Fruits', img: './assets/img/main/main/games/sevens_fruits.png' },
  { name: '6 Jokers', img: './assets/img/main/main/games/6_jokers.png' },
  { name: 'Mysterious Egypt', img: './assets/img/main/main/games/mysterious_egyptp.png' },
  { name: 'Rise of Merlin', img: './assets/img/main/main/riseOfMerlin.png' },
  { name: 'Big Bass Bonanza', img: './assets/img/main/main/games/BigBassBonanza.png' },
  { name: 'Rise of Merlin', img: './assets/img/main/main/riseOfMerlin.png' },
  { name: 'Mustang Trail', img: './assets/img/main/main/games/MustangTrail.png' },
  { name: 'Rise of Merlin', img: './assets/img/main/main/riseOfMerlin.png' },
  { name: 'Book of Gold', img: './assets/img/main/main/games/BookOfGold.png' },
  { name: 'Rise of Merlin', img: './assets/img/main/main/riseOfMerlin.png' },
  { name: '3 Genie Wishes', img: './assets/img/main/main/games/3GenieWishes.png' },
  { name: 'Rise of Merlin', img: './assets/img/main/main/riseOfMerlin.png' },
  { name: '3 Fruits Win', img: './assets/img/main/main/games/3FruitsWin.png' },
];

// Функция рендера карточек
function renderGames(gamesArray) {
  gamesGrid.innerHTML = '';
  gamesArray.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card');
    card.innerHTML = `<div class="game game-card"> <img src="${game.img}" alt="${game.name}" title="${game.name}"> <div class="game-overlay">
            <div class="game-overlay-top">
              <div class="game-title">Game name</div>
              <button class="fav-btn" title="Добавить в избранное">
                <svg class="fav-icon" width="16" height="16" viewBox="0 0 16 16" fill="#3b2b0d" stroke="#fed970"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.64049 3.89199L8 4.26394L8.35952 3.89198C9.80627 2.39516 11.334 2.25483 12.4741 2.77375C13.645 3.30675 14.5 4.57269 14.5 6.07934C14.5 7.61748 13.8676 8.80304 12.9626 9.81787C12.2172 10.6536 11.3147 11.3465 10.4366 12.0207C10.2282 12.1806 10.0212 12.3395 9.81807 12.499C9.45008 12.7879 9.12026 13.0427 8.80188 13.2279C8.4834 13.4133 8.2236 13.5 8 13.5C7.7764 13.5 7.5166 13.4133 7.19812 13.2279C6.87975 13.0427 6.54993 12.7879 6.18195 12.499C5.97877 12.3395 5.77179 12.1806 5.56344 12.0207C4.6853 11.3465 3.78276 10.6536 3.03741 9.81787C2.13237 8.80304 1.5 7.61748 1.5 6.07934C1.5 4.57269 2.35498 3.30675 3.52593 2.77375C4.66594 2.25483 6.19372 2.39516 7.64049 3.89199Z"
                    stroke="#FED970" />
                </svg>
              </button>
            </div>

            <div class="game-buttons">
              <div class="btn btn-play">
                <div class="btn__border">
                  <a href="game.html">
                    <span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.30262 2.09475L6.25359 2.0663C5.69793 1.74269 5.20913 1.45749 4.79016 1.31382C4.5592 1.22883 4.31228 1.1908 4.06513 1.20216C3.80497 1.22117 3.55629 1.31265 3.34976 1.46531C2.91965 1.77399 2.73393 2.22846 2.63216 2.7313C2.53336 3.2185 2.49548 3.85291 2.44868 4.62531L2.44645 4.66514C2.41822 5.12744 2.40039 5.58476 2.40039 5.99941C2.40039 6.41406 2.41822 6.87209 2.44645 7.33439L2.44868 7.37351C2.49548 8.1459 2.53336 8.78032 2.63216 9.2668C2.73393 9.77036 2.91965 10.2241 3.34976 10.5335C3.56222 10.6864 3.80068 10.7775 4.06513 10.7967C4.31919 10.8144 4.56285 10.7632 4.79016 10.685C5.20913 10.5413 5.69793 10.2561 6.25359 9.93323L6.30262 9.90478C6.61908 9.71986 6.92959 9.52996 7.20668 9.34291C7.54601 9.11178 7.87679 8.86934 8.19839 8.61603L8.23553 8.58687C8.80308 8.14377 9.28445 7.76753 9.61725 7.39769C9.97976 6.99229 10.2004 6.55701 10.2004 5.99941C10.2004 5.4418 9.97976 5.00582 9.61651 4.60113C9.28445 4.23129 8.80308 3.85434 8.23628 3.41195L8.19913 3.38279C7.86188 3.11964 7.52313 2.86786 7.20668 2.65591C6.91157 2.45957 6.61007 2.27218 6.30262 2.09404"
                          fill="white" />
                      </svg>
                      <i>Играть</i>
                    </span>
                  </a>
                </div>
              </div>
              <button class="btn-demo"><a href="demo_game.html">Демо</a></button>
            </div>
          </div>
        </div>`;
    gamesGrid.appendChild(card);
  });
}

// Открытие модалки
openBtn.addEventListener('click', () => {
  modal.classList.add('active');
  document.body.classList.add('modal-open');
  renderGames(games);
});

// Закрытие модалки
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
  notFound.classList.add('none');
});





// Поиск
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  resultsText.innerHTML = `<div class="games_top">
            <div class="games_panel">
              <div>
                Результаты поиска:
              </div>
            </div>
          </div>`;
  const filteredGames = games.filter(game => game.name.toLowerCase().includes(value));
  renderGames(filteredGames);
  if (filteredGames.length === 0) {
    notFound.classList.remove('none');
  }
  if (value === '') {
    resultsText.innerHTML = `<div class="games_top">
            <div class="games_panel">
              <div class="games_icon">
                <img src="./assets/img/main/main/star_top-games.svg" alt="">
              </div>
              <div>
                ТОП
              </div>
            </div>
            <a href="#" class="games_all">
              <div>Все</div>
              <img src="./assets/img/main/main/arrow.svg" alt="arrow-right">
            </a>
          </div>`;
  }
  if (filteredGames.length !== 0) {
    notFound.classList.add('none');
  }
});
// ПОИСК ПО ПРОВАЙДЕРАМ
const Filtermodal = document.getElementById('filterModal');
const openBtn1 = document.querySelector('.provider-select');
const closeBtn1 = document.querySelector('.filter__modal__close');
const gamesGrid1 = document.getElementById('gamesGrid1');
const providerCheckboxes = document.querySelectorAll('.provider-checkbox');
const providerList = document.querySelector('.providers_list')
const filterActiveContainer = document.querySelector('.filter__active__container')
const resultsText1 = document.getElementById('modal__search__results1')
// ОТКРЫТИЕ МОДАЛКИ
openBtn1.addEventListener('click', () => {
  Filtermodal.classList.add('active');
  document.body.classList.add('modal-open');
});

// Закрытие модалки
closeBtn1.addEventListener('click', () => {
  Filtermodal.classList.remove('active');
  document.body.classList.remove('modal-open');
});







const games1 = [
  { title: "Rise of Merlin", provider: "Play'n GO", img: "https://via.placeholder.com/150x100?text=Merlin" },
  { title: "Book of Gold", provider: "Playson", img: "https://via.placeholder.com/150x100?text=Book+of+Gold" },
  { title: "Big Bad Wolf", provider: "Quickspin", img: "https://via.placeholder.com/150x100?text=Big+Bad+Wolf" },
  { title: "Sweet Bonanza", provider: "Pragmatic Play", img: "https://via.placeholder.com/150x100?text=Sweet+Bonanza" },
  { title: "Fire Joker", provider: "Play'n GO", img: "https://via.placeholder.com/150x100?text=Fire+Joker" }
];

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Сбросить';
resetBtn.className = 'reset-filters-btn';
resetBtn.addEventListener('click', resetFilters);

function updateSelectedProviders() {
  const selected = [...providerCheckboxes]
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  // UI фильтров
  providerList.classList.add('none');

  if (selected.length > 0) {
    resultsText1.innerHTML = `<div class="games_top">
            <div class="games_panel">
              <div>
                Результаты поиска:
              </div>
            </div>
          </div>`;
    filterActiveContainer.style.display = 'flex'
    gamesGrid1.classList.add('active')
    selected.forEach(value => {
      const tag = document.createElement('div');
      tag.className = 'filter-tag';
      tag.textContent = value;

      const removeBtn = document.createElement('span');
      removeBtn.className = 'tag';
      removeBtn.addEventListener('click', () => {
        const checkbox = [...providerCheckboxes].find(cb => cb.value === value);
        if (checkbox) checkbox.checked = false;
        updateSelectedProviders();
      });

      tag.appendChild(removeBtn);
      filterActiveContainer.appendChild(tag);
    });

    filterActiveContainer.appendChild(resetBtn);
  }

  renderGamesByProviders(selected);
}

function resetFilters() {
  // 1. Снять все чекбоксы
  providerCheckboxes.forEach(cb => cb.checked = false);

  // 2. Очистить блок с выбранными фильтрами
  filterActiveContainer.innerHTML = '';
  filterActiveContainer.style.display = 'none'
  // 3. Скрыть блок с играми
  gamesGrid1.classList.remove('active');
  // 4. убрать надпись результаты поиска
  resultsText1.innerHTML = ``;
  // 5. Показать блок с чекбоксами
  providerList.classList.remove('none');

  // 6. Заново инициализировать чекбоксы (если ты вставляешь их через innerHTML)
  const newCheckboxes = document.querySelectorAll('.provider-checkbox');
  newCheckboxes.forEach(cb => cb.addEventListener('change', updateSelectedProviders));
}

function renderGamesByProviders(providers) {
  const filtered = providers.length === 0
    ? games
    : games.filter(g => providers.includes(g.provider));

  filtered.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `<div class="game game-card"> <img src="${game.img}" alt="${game.name}" title="${game.name}"> <div class="game-overlay">
            <div class="game-overlay-top">
              <div class="game-title">Game name</div>
              <button class="fav-btn" title="Добавить в избранное">
                <svg class="fav-icon" width="16" height="16" viewBox="0 0 16 16" fill="#3b2b0d" stroke="#fed970"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.64049 3.89199L8 4.26394L8.35952 3.89198C9.80627 2.39516 11.334 2.25483 12.4741 2.77375C13.645 3.30675 14.5 4.57269 14.5 6.07934C14.5 7.61748 13.8676 8.80304 12.9626 9.81787C12.2172 10.6536 11.3147 11.3465 10.4366 12.0207C10.2282 12.1806 10.0212 12.3395 9.81807 12.499C9.45008 12.7879 9.12026 13.0427 8.80188 13.2279C8.4834 13.4133 8.2236 13.5 8 13.5C7.7764 13.5 7.5166 13.4133 7.19812 13.2279C6.87975 13.0427 6.54993 12.7879 6.18195 12.499C5.97877 12.3395 5.77179 12.1806 5.56344 12.0207C4.6853 11.3465 3.78276 10.6536 3.03741 9.81787C2.13237 8.80304 1.5 7.61748 1.5 6.07934C1.5 4.57269 2.35498 3.30675 3.52593 2.77375C4.66594 2.25483 6.19372 2.39516 7.64049 3.89199Z"
                    stroke="#FED970" />
                </svg>
              </button>
            </div>

            <div class="game-buttons">
              <div class="btn btn-play">
                <div class="btn__border">
                  <a href="game.html">
                    <span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.30262 2.09475L6.25359 2.0663C5.69793 1.74269 5.20913 1.45749 4.79016 1.31382C4.5592 1.22883 4.31228 1.1908 4.06513 1.20216C3.80497 1.22117 3.55629 1.31265 3.34976 1.46531C2.91965 1.77399 2.73393 2.22846 2.63216 2.7313C2.53336 3.2185 2.49548 3.85291 2.44868 4.62531L2.44645 4.66514C2.41822 5.12744 2.40039 5.58476 2.40039 5.99941C2.40039 6.41406 2.41822 6.87209 2.44645 7.33439L2.44868 7.37351C2.49548 8.1459 2.53336 8.78032 2.63216 9.2668C2.73393 9.77036 2.91965 10.2241 3.34976 10.5335C3.56222 10.6864 3.80068 10.7775 4.06513 10.7967C4.31919 10.8144 4.56285 10.7632 4.79016 10.685C5.20913 10.5413 5.69793 10.2561 6.25359 9.93323L6.30262 9.90478C6.61908 9.71986 6.92959 9.52996 7.20668 9.34291C7.54601 9.11178 7.87679 8.86934 8.19839 8.61603L8.23553 8.58687C8.80308 8.14377 9.28445 7.76753 9.61725 7.39769C9.97976 6.99229 10.2004 6.55701 10.2004 5.99941C10.2004 5.4418 9.97976 5.00582 9.61651 4.60113C9.28445 4.23129 8.80308 3.85434 8.23628 3.41195L8.19913 3.38279C7.86188 3.11964 7.52313 2.86786 7.20668 2.65591C6.91157 2.45957 6.61007 2.27218 6.30262 2.09404"
                          fill="white" />
                      </svg>
                      <i>Играть</i>
                    </span>
                  </a>
                </div>
              </div>
              <button class="btn-demo"><a href="demo_game.html">Демо</a></button>
            </div>
          </div>
        </div>`;;
    gamesGrid1.appendChild(card);
  });
}

// Инициализация
providerCheckboxes.forEach(cb => cb.addEventListener('change', updateSelectedProviders));
renderGamesByProviders([]); // начальная отрисовка




const favButtons = document.querySelectorAll('.fav-btn');

favButtons.forEach(button => {
  button.addEventListener('click', () => {
    const svg = button.querySelector('.fav-icon');

    if (svg.getAttribute('fill') === '#3b2b0d') {
      svg.setAttribute('fill', '#e8b21d'); // Красим сердечко
    } else {
      svg.setAttribute('fill', '#3b2b0d'); // Возвращаем обратно
    }
  });
});


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
const navtoggle = document.querySelector("#nav--toggle");
const menu = document.querySelector("#menu");
const body = document.body;

// При клике на иконку, вызываем ф-ию
navtoggle.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  navtoggle.classList.toggle("open");
  menu.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  menu.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  navtoggle.classList.remove("open");
  menu.classList.remove("active");
  body.classList.remove("noscroll");
}
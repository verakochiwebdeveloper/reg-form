// Получаем элементы формы
let form = document.getElementById("registration-form-js");
let emailInput = form.elements["email"];
let passwordInput = form.elements["password"];
let confirmPasswordInput = form.elements["confirm-password"];
let checkboxInput = form.elements["checkbox"];
let submitButton = form.elements["submit"];

// Добавляем обработчик события отправки формы
form.addEventListener("submit", function(event) {
  // Отменяем стандартное поведение формы
  event.preventDefault();

  // Проверяем валидность почты
  if (!validateEmail(emailInput.value)) {
    alert("Неверный формат почты");
    return;
  }

  // Проверяем совпадение паролей
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Пароли не совпадают");
    return;
  }

  // Проверяем, что чекбокс подтверждения отмечен
  if (!checkboxInput.checked) {
    alert("Необходимо подтвердить согласие на обработку персональных данных");
    return;
  }

  // Если все проверки пройдены, отправляем данные на сервер
  sendRegistrationData(emailInput.value, passwordInput.value);

  // Выводим сообщение об успешной регистрации
  alert("Подтвердите почту по ссылке в письме");
});

// Функция для валидации почты
function validateEmail(email) {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Функция для отправки данных на сервер
function sendRegistrationData(email, password) {
  // Отправляем данные через AJAX-запрос на сервер
  // Например, используя библиотеку jQuery для AJAX-запросов
  $.ajax({
    url: "/register",
    type: "POST",
    data: { email: email, password: password },
    success: function(response) {
      // Обрабатываем успешный ответ от сервера
    },
    error: function(xhr, status, error) {
      // Обрабатываем ошибку при отправке данных на сервер
    }
  });
}

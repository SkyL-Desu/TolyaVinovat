document.addEventListener("DOMContentLoaded", function () {
  const text = "Толя";
  const animatedText = document.getElementById("animatedText");

  // Создаем массив букв
  const letters = text.split("");
  animatedText.innerHTML = ""; // Очищаем текст

  // Устанавливаем начальную прозрачность для текста
  animatedText.style.opacity = 1; // Устанавливаем прозрачность в 1, чтобы текст был виден

  // Добавляем каждую букву с задержкой
  letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.opacity = 0; // Начальная прозрачность
    animatedText.appendChild(span);

    // Анимация появления каждой буквы
    setTimeout(() => {
      span.style.transition = "opacity 0.5s ease";
      span.style.opacity = 1; // Увеличиваем прозрачность
      span.style.textShadow =
        "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(192, 192, 192, 0.5)"; // Добавляем свечение
    }, index * 1000); // Задержка в 300 мс между буквами
  });

  // Появление второго текста
  setTimeout(() => {
    const flameText = document.getElementById("flameText");
    flameText.style.opacity = 1; // Увеличиваем прозрачность второго текста
  }, letters.length * 2000 + 1000); // Задержка появления второго текста
});

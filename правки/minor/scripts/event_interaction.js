document
  .getElementById("changeDataButton")
  .addEventListener("click", function () {
    document.querySelector("p:nth-of-type(1)").textContent =
      "Фамилия: Malafeeva";
    document.querySelector("p:nth-of-type(2)").textContent = "Имя: Mariia";
    document.querySelector("p:nth-of-type(3)").textContent =
      "Год рождения: 2006";
  });

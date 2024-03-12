import checkNumberInputs from "./checkNumberInputs";

const forms = (state) => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");

  checkNumberInputs("input[name='user_phone']");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let result = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => (item.value = ""));
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute("data-calc") === "end") {
        for (const key in state) {
          formData.append(key, state[key]);
        }
      }

      postData("assets/server.php", formData)
        .then((result) => {
          console.log(result);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 10000);
        });
    });
  });
};

export default forms;

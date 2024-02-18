const modals = () => {
  function openModal(modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = modal.querySelector(closeSelector);

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) e.preventDefault();

        openModal(modal);
      });
    });

    close.addEventListener("click", () => closeModal(modal));

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      const modal = document.querySelector(selector);
      openModal(modal);
    }, time);
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_close");
  bindModal(".phone_link", ".popup", ".popup_close");

  // showModalByTime(".popup", 60000);
};

export default modals;

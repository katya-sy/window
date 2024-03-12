const modals = () => {
  function openModal(modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = modal.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) e.preventDefault();

        windows.forEach((item) => (item.style.display = "none"));
        openModal(modal);
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => (item.style.display = "none"));
      closeModal(modal);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => (item.style.display = "none"));
        closeModal(modal);
      }
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
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );

  // showModalByTime(".popup", 60000);
};

export default modals;

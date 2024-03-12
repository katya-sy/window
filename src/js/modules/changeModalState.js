import checkNumberInputs from "./checkNumberInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumberInputs("#width");
  checkNumberInputs("#height");

  state.form = 0;
  state.type = "tree";

  function bindActionToElements(event, element, prop) {
    element.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = index;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              index === 0 ? (state[prop] = "cold") : (state[prop] = "warm");
              element.forEach((box, i) =>
                index === i ? (box.checked = true) : (box.checked = false)
              );
            } else state[prop] = item.value;
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionToElements("click", windowForm, "form");
  bindActionToElements("input", windowHeight, "height");
  bindActionToElements("input", windowWidth, "width");
  bindActionToElements("change", windowType, "type");
  bindActionToElements("change", windowProfile, "profile");
};

export default changeModalState;

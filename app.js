//? Selectors

const inputBox = document.querySelector(".inputbox");
const addBtn = document.querySelector(".add-btn");
const delBtn = document.querySelector(".del-btn");
const listArea = document.querySelector(".listarea");

//? addBtn event handler
addBtn.addEventListener("click", () => {
  if (!inputBox.value) {
    alert("Please enter a word.");
  } else {
    const newDiv = document.createElement("div");
    listArea.appendChild(newDiv);
    newDiv.innerHTML = `<div>${inputBox.value}</div>
    <i class="fa-solid fa-trash"></i>`;
    newDiv.className = "styleBtn";
    inputBox.value = "";

    newDiv.addEventListener("click", () => {
      if (newDiv.style.backgroundColor == "red") {
        newDiv.style.backgroundColor = "#0096ff";
      } else {
        newDiv.style.backgroundColor = "red";
        trash.forEach((t) => {
          t.addEventListener("click", () => {
            newDiv.style.backgroundColor == "red" && t.parentElement.remove();
          });
        });
      }
    });
    const trash = document.querySelectorAll(".fa-trash");

    //? delBtn event handler
    delBtn.addEventListener("click", () => {
      listArea.childElementCount > 0 && newDiv.remove();
      inputBox.value = "";
      inputBox.focus();
    });
  }
  inputBox.focus();
});

//? Window onload handler
window.addEventListener("load", () => {
  inputBox.focus();
});

//? enter key event handler
inputBox.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    addBtn.click();
  }
});

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
        // trash.style.display = "none";
      } else {
        newDiv.style.backgroundColor = "red";
        for (let i = 0; i < trash.length; i++) {
          trash[i].onclick = function () {
            this.parentNode.remove();
          };
        }
      }
    });
    const trash = document.querySelectorAll(".fa-trash");
    console.log(trash);

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

//? enter key and del key event handler
inputBox.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    addBtn.click();
  }
});

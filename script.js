const input = document.getElementById("taskInput");
const list = document.getElementById("list-item");

function addyourtask() {
  if (input.value === "") {
    alert("You must write something");
  } else {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = input.value;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = "";
  }
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addyourtask();
    event.preventDefault();
  }
});

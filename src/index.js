document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTast(e.target.task.value);
    form.reset();
  });
});

function addTast(value) {
  let ul = document.querySelector("#list #tasks");
  let p = document.createElement("p");
  let li = document.createElement("li");
  let button = document.createElement("button");

  button.textContent = "X";
  button.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.remove();
  });

  p.textContent = `${value}  `;
  p.appendChild(button);
  li.appendChild(p);
  ul.appendChild(li);
}

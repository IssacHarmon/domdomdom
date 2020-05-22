document.addEventListener("DOMContentLoaded", function() {
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  let container = document.createElement("div");
  let colorArray = [
    "red",
    "green",
    "pink",
    "yellow",
    "olive",
    "brown",
    "blue",
    "cyan",
  ];

  container.classList.add("container");

  button.appendChild(btnText);
  document.body.appendChild(button);        //appending a child(you are putting What to WHERE)
  document.body.appendChild(container);

  let num = 1;

  button.addEventListener("click", function() { //
    let div = document.createElement("div");
    div.className = "square";
    container.appendChild(div);
    div.id = num;
    div.innerHTML = num;
    num++;

    div.addEventListener("click", function() {
      setElementColor(div);
    });

    div.addEventListener("dblclick", function() {
      if (div.id % 2 === 0) {
        if (div.nextSibling !== null) {
          div.parentElement.removeChild(div.nextSibling);
        } else {
          alert("there is no square, wtf are you doing");
        }
      } else {
        if (div.previousSibling !== null) {
          div.parentElement.removeChild(div.previousSibling);
        } else {
          alert("again, there is no square, wtf are you dong");
        }
      }
    });
  });

  function setElementColor(element) {
    let randomNumber = Math.floor(Math.random() * 7);
    element.style.backgroundColor = colorArray[randomNumber]; //this helps create a random background color
  }
});

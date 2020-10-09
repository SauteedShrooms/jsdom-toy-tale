const URL = 'http://localhost:3000/toys'

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {

  fetch(URL)
  .then(rsp => rsp.json())
  .then(toys => {
    debugger
    toys.forEach(toy => renderToys(toy))
  });

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const renderToys = (toy) => {
  let toyCollection = document.querySelector('#toy-collection');
  let newDiv = document.createElement('div');
  toyCollection.appendChild(newDiv);
  newDiv.classList.add('card');

  

}
let buttonsOpen = document.querySelector('.open-modal-button');
let modal = document.querySelector('.modal-container');
let buttonClose = document.querySelector('.modal-close-button');
let buttonAdditionChild = document.querySelector('.children-button > .addition');
let inputFieldChild = document.getElementById('children');
let buttonAdditionAdult = document.querySelector('.adult-button > .addition');
let inputFieldAdult = document.getElementById('adult');
let buttonDecreaseChild = document.querySelector('.children-button > .decrease');
let buttonDecreaseAdult = document.querySelector('.adult-button > .decrease');


buttonsOpen.onclick = function () {
  modal.classList.remove('modal-container-close');
};
buttonClose.onclick = function () {
  modal.classList.add('modal-container-close');
};

buttonAdditionChild.onclick = function () {
  console.log(inputFieldChild.value);
  inputFieldChild.value = ++inputFieldChild.value;

};

buttonAdditionAdult.onclick = function () {
  console.log(inputFieldAdult.value);
  inputFieldAdult.value = ++inputFieldAdult.value;

};

buttonDecreaseChild.onclick = function () {
  console.log(inputFieldChild.value);
  if (inputFieldChild.value > 0) {
    inputFieldChild.value = --inputFieldChild.value;
  }else {
    inputFieldChild.value = 0;
  }


};

buttonDecreaseAdult.onclick = function () {
  console.log(inputFieldAdult.value);
  if (inputFieldAdult.value > 0) {
    inputFieldAdult.value = --inputFieldAdult.value;
  }else {
    inputFieldAdult.value = 0;
  }
};

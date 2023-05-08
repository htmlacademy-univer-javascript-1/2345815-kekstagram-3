import { goToOriginal } from './scale.js';
export function pastePhotos(arrayOfInformation) {
  const findID = document.querySelector('.pictures');
  const findTemp = document.querySelector('#picture');
  const arrayImg = document.createDocumentFragment();
  const list = arrayOfInformation;
  list.forEach((it) => {
    const index = it.Id + 1;
    const photo = findTemp.content.cloneNode(true);
    photo.querySelector('.picture__img').src = `./photos/${index}.jpg`;
    photo.querySelector('.picture__img').id = index;
    photo.querySelector('.picture__comments').textContent = it.comments;
    photo.querySelector('.picture__likes').textContent = it.likes;
    arrayImg.appendChild(photo);
  });
  return findID.appendChild(arrayImg);
}

export async function serverJson(link) {
  const info = document.querySelectorAll('.picture__info');
  const pictures = document.querySelectorAll('.picture__img');
  const obtainedJason = await fetch(link).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Error('response not ok');
    }
  }
  );
  for (let i = 0; i < info.length; i++) {
    pictures[i].src = obtainedJason[i].url;
    info[i].querySelector('.picture__likes').textContent = obtainedJason[i].likes;
    info[i].querySelector('.picture__comments').textContent = obtainedJason[i].comments;
  }
}
const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');


function moveToFront(element) {
  element.style.zIndex += 2;
}
const successMessageTemplate = body.querySelector('#success').content.querySelector('.success');
export const successMessage = successMessageTemplate.cloneNode(true);
export const successButton = successMessage.querySelector('.success__button');
const removeHidden = document.querySelector('.img-upload__overlay');
const resetData = document.querySelector('.img-upload__form');

function showSuccess() {
  removeHidden.classList.add('hidden');
  resetData.reset();
  document.body.classList.remove('model-open');
  body.appendChild(successMessage);
  moveToFront(successMessage);
}

const errorMessageTemplate = body.querySelector('#error').content.querySelector('.error');
export const errorMessage = errorMessageTemplate.cloneNode(true);
export const errorButton = errorMessage.querySelector('.error__button');
function showError() {
  body.appendChild(errorMessage);
  moveToFront(errorMessage);
}

function sendJason(evt) {
  const link = 'https://27.javascript.pages.academy/kekstagram-simple';
  const formData = new FormData(evt.target);
  fetch(link, {
    method: 'POST',
    body: formData
  }
  ).then((response) => {
    if (response.ok) {
      showSuccess();
      goToOriginal();
    } else {
      showError();
    }
  })
    .catch((error) => Error(error));
}

const pristine = new Pristine(form);
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {sendJason(evt);} else {showError();}
});
// window.onclick = e => console.log(e.target)

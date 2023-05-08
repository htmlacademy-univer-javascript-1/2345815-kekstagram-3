import { errorMessage, errorButton, successMessage, successButton, showError } from './pastePhotos.js';
import { goToOriginal } from './scale.js';

const removeHidden = document.querySelector('.img-upload__overlay');
const locateHidden = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const resetData = document.querySelector('.img-upload__form');

export function close(e) {
  const errorBoolean = document.contains(errorMessage);
  const successBoolean = document.contains(successMessage);
  const checkGeneral = closeButton.id === e.target.id || e.key === 'Escape';
  const buttonBooleans = (e.target === successButton) || (e.target === errorButton);
  const outsideButtonBoxBooleans = (e.target === successMessage) || (e.target === errorMessage);

  if (checkGeneral || buttonBooleans || outsideButtonBoxBooleans) {
    if (!errorBoolean && !successBoolean) {
      removeHidden.classList.add('hidden'); resetData.reset();
      document.body.classList.remove('model-open');
      goToOriginal();
      closeButton.removeEventListener('click', close);
      document.removeEventListener('keyup', close);
      successMessage.removeEventListener('click', close);
      errorMessage.removeEventListener('click', close);
    } else {
      errorMessage.remove();
      successMessage.remove();
    }
  }
}

function open() {
  const loadedFile = document.querySelector('#upload-file').files[0];
  if (loadedFile.type.split('/')[0] === 'image') {
    document.body.classList.add('model-open');
    const currentFile = document.querySelector('.img-upload__preview').children[0];
    removeHidden.classList.remove('hidden');
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      currentFile.src = fileReader.result;
    };
    fileReader.readAsDataURL(loadedFile);

    closeButton.addEventListener('click', close);
    successMessage.addEventListener('click', close);
    errorMessage.addEventListener('click', close);
    document.addEventListener('keyup', close);
  } else {
    showError();
    errorMessage.addEventListener('click', close);
  }
}
locateHidden.addEventListener('change', open);


//window.onclick = e => {if (c.id == e.target.id) {f.classList.add('hidden'); console.log(e)} }
// window.onclick = e => console.log(e.target.classList)
// console.log(errorButton.classList[0])
// console.log(successButton)

//let f =


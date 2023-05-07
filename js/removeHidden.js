import { errorMessage, errorButton, successMessage, successButton } from './pastePhotos.js';
import { goToOriginal } from './scale.js';

const removeHidden = document.querySelector('.img-upload__overlay');
const locateHidden = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const resetData = document.querySelector('.img-upload__form');

export function close(e) {
  let errorBoolean = document.contains(errorMessage)
  let successBoolean = document.contains(successMessage)
  if (closeButton.id === e.target.id || e.key === 'Escape') {
    if (!errorBoolean && !successBoolean){
    removeHidden.classList.add('hidden'); resetData.reset();
    document.body.classList.remove('model-open');
    goToOriginal()
    } else{
      errorMessage.remove()
      successMessage.remove()
     }
  }
}

function open() {
  removeHidden.classList.remove('hidden');
  document.body.classList.add('model-open');
  let loadedFile = document.querySelector('#upload-file').files[0]
  let currentFile = document.querySelector('.img-upload__preview').children[0]

  let fileReader = new FileReader()
  fileReader.onloadend = function(){
    currentFile.src = fileReader.result
  }
  fileReader.readAsDataURL(loadedFile)
}
locateHidden.addEventListener('change', open);
closeButton.addEventListener('click', close);
document.addEventListener('keyup', close);


//window.onclick = e => {if (c.id == e.target.id) {f.classList.add('hidden'); console.log(e)} }
// window.onclick = e => console.log(e.target.classList)
// console.log(errorButton.classList[0])
// console.log(successButton)

//let f =


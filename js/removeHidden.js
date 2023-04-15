const removeHidden = document.querySelector('.img-upload__overlay');
const locateHidden = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const resetData = document.querySelector('.img-upload__form');
function close(e){
  if (closeButton.id === e.target.id || e.key === 'Escape' ) {
    removeHidden.classList.add('hidden');resetData.reset();
    document.body.classList.remove('model-open');
}
}
function open(){
  removeHidden.classList.remove('hidden');
  document.body.classList.add('model-open');
}
locateHidden.addEventListener('change', open);
closeButton.addEventListener('click', close );
document.addEventListener('keyup', close);

//window.onclick = e => {if (c.id == e.target.id) {f.classList.add('hidden'); console.log(e)} }
//window.onclick = e => console.log(e)
//let f =


import { all,editClass } from './effects.js';
const meter = document.querySelector('.scale__control--value');
const smaller = document.querySelector('.scale__control--smaller');
const bigger = document.querySelector('.scale__control--bigger');
const imageSize = document.querySelector('.img-upload__preview');
function forSmaller() {
  const k = meter.value.replace('%', '');
  const check = Number(k) - 25;
  meter.value = (check > 25) ? `${check}%` : '25%';
  imageSize.style.transform = `scale(${meter.value.replace('%', '') / 100})`;
}
function forBigger() {
  const k = meter.value.replace('%', '');
  const check = Number(k) + 25;
  meter.value = (check < 100) ? `${check}%` : '100%';
  imageSize.style.transform = `scale(${meter.value.replace('%', '') / 100})`;
}
export function goToOriginal(){
  imageSize.style.transform = 'scale(100%)';
  editClass(all[0]);
  imageSize.children[0].src = 'img/upload-default-image.jpg';
}
window.onclick = e => console.log(imageSize.children[0].src.type)

smaller.addEventListener('click', forSmaller);
bigger.addEventListener('click', forBigger);

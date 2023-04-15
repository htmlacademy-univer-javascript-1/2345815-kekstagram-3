
let meter = document.querySelector('.scale__control--value')
let smaller = document.querySelector('.scale__control--smaller')
let bigger = document.querySelector('.scale__control--bigger')
let imageSize = document.querySelector('.img-upload__preview')
smaller.addEventListener('click', function(e){
  const k = meter.value.replace('%','')
  const check = Number(k) - 25
  meter.value = (check > 25) ? `${check}%` : "25%"
  imageSize.style.transform = `scale(${meter.value.replace('%','')/100})`
})
bigger.addEventListener('click', function(e){
  const k = meter.value.replace('%','')
  const check = Number(k) + 25
  meter.value = (check < 100) ? `${check}%` : "100%"
  imageSize.style.transform = `scale(${meter.value.replace('%','')/100})`
})

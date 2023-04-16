const all = document.querySelectorAll('.effects__radio');
const image = document.querySelector('.img-upload__preview');

function lol(evt){
  const list = evt.explicitOriginalTarget.classList;
  const imgClass = image.classList;
  if (imgClass.length !== 0) {
    imgClass.remove(imgClass[1]);
    imgClass.add(list[1]);
  } else {
    imgClass.add(list[1]);
  }
}

for (let i = 0; i < all.length; i++) {
  all[i].addEventListener('click', lol);
}

// function lol(evt){
//   let list = evt.target.classList
//   if (list.contains('visually-hidden')) {
//     for (let e = 0; e < all.length; e++) {
//       let rest = all[e].classList
//      if (!rest.contains('visually-hidden')) rest.add('visually-hidden')
//     }
//     list.remove('visually-hidden')
//   }
// }

// for (let i = 0; i < all.length; i++) {
//   all[i].addEventListener('click', lol)
// }

// window.addEventListener('click', function(e){console.log(e)})


// let effects = document.querySelectorAll('.effects__item');
// for (let i = 0; i < effects.length; i++) {
//   console.log(effects[i].querySelectorAll('*[id]'))
// }



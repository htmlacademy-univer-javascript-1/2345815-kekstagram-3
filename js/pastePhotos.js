import {getRandomInformationList} from "./util.js";
let findID = document.querySelector('.pictures')
let findTemp = document.querySelector('#picture')
let arrayImg = document.createDocumentFragment()
let list = getRandomInformationList(25, 0, 100, 15, 200, 0, 200)
list.forEach((it) => {
  let index = it.Id + 1
  let photo = findTemp.content.cloneNode(true)
  photo.querySelector('.picture__img').src = `./photos/${index}.jpg`
  photo.querySelector('.picture__img').id = index
  photo.querySelector('.picture__comments').textContent = it.comments
  photo.querySelector('.picture__likes').textContent = it.likes
  arrayImg.appendChild(photo)
})
findID.appendChild(arrayImg)

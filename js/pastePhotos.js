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

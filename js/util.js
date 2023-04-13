import { Information } from './xdata.js';

//2.17
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInt(from, to) {
  if (isNaN(from) || isNaN(to)) { throw new Error('Error'); }
  from = Math.abs(from);
  to = Math.abs(to);
  const random = Math.random();
  return parseInt((from < to) ? from + (random * (to - from)) : to + (random * (from - to)), 10);
}

//Функция для проверки максимальной длины строки. Будет использоваться для проверки
//длины введённого комментария, но должна быть универсальна.
//eslint-disable-next-line
function checkLengthOfString(str, size) {
  return (str.length === size);
}

//4.15
function getRandomString(from, to) {
  let str = '';
  const random = getRandomInt(from, to);
  for (let index = 0; index < random; index++) {
    str = str + String.fromCharCode(getRandomInt(65, 90));
  }
  return str;
}

export function getRandomInformationList(amountProduced, descriptionFrom, descroptionTo, likesFrom, likesTo, commentsFrom, commentsTo) {
  const list = [];
  for (let index = 0; index < amountProduced; index++) {
    const listSize = list.length;
    const id = (listSize !== 0) ? list[listSize - 1].Id + 1 : 0;
    const url = `photos/${id}.jpg`;
    const description = `${id}.${getRandomString(descriptionFrom, descroptionTo)}`;
    const likes = getRandomInt(likesFrom, likesTo);
    const comments = getRandomInt(commentsFrom, commentsTo);
    list.push(new Information(id, url, description, likes, comments));
  }
  return list;
}


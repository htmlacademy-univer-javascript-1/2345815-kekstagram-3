import Information from "./xdata.js";

//2.17
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function randomInt(from, to){
  if (isNaN(from) || isNaN(to)) { throw new Error('Error') };
  var from = Math.abs(from);
  var to = Math.abs(to);
  const random = Math.random();
return parseInt((from < to) ? from + (random*(to-from)) : to + (random*(from-to)));
}

//Функция для проверки максимальной длины строки. Будет использоваться для проверки
//длины введённого комментария, но должна быть универсальна.
//eslint-disable-next-line
function lengthOfString(str,size){
  return (str.length == size) ? true : false;
}

//4.15
function randomString(from, to){
 let str = '';
 let random = randomInt(from,to)
  for (let index = 0; index < random; index++) {
   str = str + String.fromCharCode(randomInt(65,90));
  }
  return str;
}
function randomGenerator(amountProduced, descriptionFrom, descroptionTo, likesFrom, likesTo, commentsFrom,commentsTo){
  const list = [];
  for (let index = 0; index < amountProduced; index++) {
    const listSize = list.length;
    const id = (listSize !== 0) ? list[listSize - 1].Id + 1 : 0;
    const url = `photos/${id}.jpg`;
    const description = `${id}.${randomString(descriptionFrom,descroptionTo)}`;
    const likes = randomInt(likesFrom,likesTo);
    const comments = randomString(commentsFrom,commentsTo);
    list.push(new Information(id,url,description,likes,comments));
  }
  return list;
}
export default randomGenerator;

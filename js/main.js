import { getRandomInformationList } from './util.js';
import { pastePhotos, serverJson } from './pastePhotos.js';
import { } from './removeHidden.js';
import { } from './scale.js';
import { } from './effects.js';

const informationArray = getRandomInformationList(25, 0, 100, 15, 200, 0, 200);
pastePhotos(informationArray);
serverJson('https://27.javascript.pages.academy/kekstagram-simple/data');

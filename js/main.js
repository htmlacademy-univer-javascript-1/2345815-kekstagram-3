import { getRandomInformationList } from './util.js';
import { pastePhotos } from './pastePhotos.js';
import { } from './removeHidden.js';
import { } from './scale.js';
import { } from './effects.js';

const informationArray = getRandomInformationList(25, 0, 100, 15, 200, 0, 200);
pastePhotos(informationArray);


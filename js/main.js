import { getRandomInformationList } from './util.js';
import { pastePhotos } from './pastePhotos.js';

const informationArray = getRandomInformationList(25, 0, 100, 15, 200, 0, 200);
pastePhotos(informationArray);


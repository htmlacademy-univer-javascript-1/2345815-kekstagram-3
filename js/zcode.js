
function print(value){
return console.log(value)
}

function folderNames(path){
  let fs = require('fs');
  return fs.readdirSync(path);
}

function filteredFolders(info){
  info = folderNames(info);
  let list = []
  for (let i = 0; i < info.length; i++) {
  if (info[i].replace('.','') == info[i]) list.push(info[i])
  }
  return list
}

function searchFolder(stringName, stringFolderName){
  let found = false;
  let currentFolder = folderNames(stringFolderName);

  for (let i = 0; i < currentFolder.length; i++) {
   let search = currentFolder[i];
   if (search == stringName) return found = true;
  }

  return found;
}

class folderClass{
  constructor(strPath, foldList ){
    this.strPath = strPath;
    this.foldList = foldList;
  }
}

function finalSearch(stringName){
  var booleanEnd = false;
  let listOfPaths = []; let path = '.'; let insideOfFolderList = folderNames('.');

  while(booleanEnd == false){
    let checkBeginning = listOfPaths.length

    function creator(strPath){
      insideOfFolderList = filteredFolders(strPath)
      let pathInfo = new folderClass(strPath, insideOfFolderList)
      for (let i = 0; i < pathInfo.foldList.length; i++) {
        listOfPaths.push(`${pathInfo.strPath + '/' + pathInfo.foldList[i]}`)
      }
    }
    size = listOfPaths.length
    for (let index = -1; index < size; index++) {
      if (index == -1) index = 0
      if (listOfPaths.length != 0) path = listOfPaths[index]
      listOfPaths = [... new Set(listOfPaths)]
      creator(path)
    }
    let checkEnd = listOfPaths.length

    if (checkBeginning == checkEnd) {booleanEnd = true}

  }

  for (let i = 0; i < listOfPaths.length; i++) {
    if (searchFolder(stringName, listOfPaths[i]) == true) {return `${listOfPaths[i]}/${stringName}`}
  }
return "File Not Found"
}
print(finalSearch('photos'))
print(finalSearch('exp'))
print(finalSearch('style.css'))
print(finalSearch('andflngmd'))





//---------Prototype---------//


function listToFolderString(name){
  let listOfFolders = [];
  for (let i = 0; listOfFolders.length < name.length ; i++) {
   listOfFolders.push('/' + name[i]);
  }
return listOfFolders;
}

function searchFolders(){
  let list = [];
  let mainFolder = [filteredFolders('.')]
  let no = false
  let repeat = 0
  while ( no != true) {
    let tempList = listToFolderString(mainFolder)
    let size = tempList.length
    let trans = (repeat == 0) ? listToFolderString(mainFolder) : mainFolder;
    for (let i = 0; i < size; i++) {
      mainFolder = filteredFolders('.' + trans[0])
      for (let index = 0; index < mainFolder.length; index++) {
        let edit = listToFolderString([mainFolder[index]])
        list.push(trans[i]+ edit)
      }

     }
     mainFolder = list
      if (repeat == 0) no = true //only works for repeat == 0  right now
     repeat = repeat + 1
  }
  return list
}
//print(folderNames('./2345815-kekstagram-3/img'))

function searchForFiles(name){
  let allFolders = searchFolders()

  for (let i = 0; i < allFolders.length; i++) {
   let input = '.'+ allFolders[i]
   let k = searchFolder(name, input)
   if (k == true) return input + '/' + name
  }

  return "File fot found"

}


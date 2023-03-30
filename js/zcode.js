
function print(value){
return console.log(value)
}

function folderNames(path){
  let fs = require('fs');
  return fs.readdirSync(path);
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

function finalSearch(){
  var x = false;
  let listFinished = []; let list = []; let path = '.'; let insideOfFolderList = folderNames('.');

  while(x == false){
    let checkBeginning = list.length

    function creator(strPath){
      insideOfFolderList = filteredFolders(strPath)
      k = new folderClass(strPath, insideOfFolderList)
      for (let i = 0; i < k.foldList.length; i++) {
        list.push(`${k.strPath + '/' + k.foldList[i]}`)
      }
    }
    size = list.length
    for (let index = -1; index < size; index++) {
      if (index == -1) index = 0
      if (list.length != 0) path = list[index]
      list = [... new Set(list)]
      creator(path)
    }
    let checkEnd = list.length

    if (checkBeginning == checkEnd) {x = true}

  }
  print(list)
}
finalSearch()





//---------Prototype---------//
function filteredFolders(info){
  info = folderNames(info);
  let list = []
  for (let i = 0; i < info.length; i++) {
  if (info[i].replace('.','') == info[i]) list.push(info[i])
  }
  return list
}

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


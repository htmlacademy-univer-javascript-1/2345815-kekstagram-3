
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

function searchFolder(name, folderName){
  let found = false;
  let currentFolder = folderNames(folderName);

  for (let i = 0; i < currentFolder.length; i++) {
   let search = currentFolder[i];
   if (search == name) return found = true;
  }

  return found;
}

function searchForFiles(name){
  let allFolders = searchFolders()

  for (let i = 0; i < allFolders.length; i++) {
   let input = '.'+ allFolders[i]
   let k = searchFolder(name, input)
   if (k == true) return input + '/' + name
  }

  return "File fot found"

}


print(searchForFiles('zcode.js'))

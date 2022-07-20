function checkFolder(parentFolder,folderName) {
  do_create = true
  var allFolders = parentFolder.getFolders()
  while (allFolders.hasNext()) {
    var folder = allFolders.next();
    if (folder.getName() == folderName.toString()) {
      do_create = false
      return newFolder = folder
    }
  }
  if (do_create) {
    return newFolder = parentFolder.createFolder(folderName.toString())
  }
}


function checkFile(parentFolder,filename) {
  var results;
  var haBDs = parentFolder.getFilesByName(filename)
  //Does not exist
  if (!haBDs.hasNext()) {
    results = haBDs.hasNext();
  }
  //Does exist
  else {
    results = haBDs.hasNext();
  }
  return results;
}

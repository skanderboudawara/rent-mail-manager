function attachement_management() {

  Object.keys(LIST_AND_FOLDERS).forEach(function (entry) {
    Logger.log(`Treating ${entry}`)
    var allEmailThreads = GmailApp.search('from:' + entry)
    var parentFolder = DriveApp.getFolderById(LIST_AND_FOLDERS[entry]);


    for (var thread = 0; thread < allEmailThreads.length; thread++) {
      messages = allEmailThreads[thread].getMessages()
      for (var message_index = 0; message_index < messages.length; message_index++) {
        try {
          message = messages[message_index]
          year_message = message.getDate().getFullYear()
          month_message = message.getDate().getMonth() + 1
          save_folder = checkFolder(parentFolder, year_message)
          sub_folder_save_name = month_message + ' - ' + year_message
          sub_save_folder = checkFolder(save_folder, sub_folder_save_name)
          var all_attachments = message.getAttachments();
          if (!all_attachments){
            continue;
          }
          all_attachments.forEach(function (attachment_file) {
            fileName = month_message + '/' + year_message + ' - ' + attachment_file.getName();
            if (checkFile(sub_save_folder, fileName)) {
              return;
            }
            if (attachment_file.getName().includes('pdf')) { 
              sub_save_folder.createFile(attachment_file.copyBlob()).setName(fileName); 
              }
          });
        }
        catch (e) {
          Logger.log(e)
        }
      }

    }

  });

};


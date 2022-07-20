# Rent / Bill attachment Gmail & Gdrive Manager 

## Problematic to solve:
Each month I receive my transportation/rent bill via an e-mail with an attached pdf. Then, manually I download and save the attachments in my Google drive dedicated folders. Since It was a repetitive task, I wanted to automate it via Google script.

#### 📩 E-mails attachments
![Mails](https://i.ibb.co/S3fPppB/Capture-d-cran-2022-07-20-08-20-11.jpg)

#### 📥 G-drive organization
![Parent folder](https://i.ibb.co/6wHt0DH/Capture-d-cran-2022-07-20-08-09-08.jpg)
![Sub folder](https://i.ibb.co/m9X2nh3/Capture-d-cran-2022-07-20-08-09-25.jpg)
![files](https://i.ibb.co/Xtw0Y0X/Capture-d-cran-2022-07-20-08-09-45.jpg)

## Instructions
- Create a Google app script on your drive
- Copy and paste the code in this repository
- Grant access to Gmail/Gdrive to your script
- Modify the dictionary in `list_folders.gs`
- The dictionary should have this form
```
{ 'email (or part of the email)' : 'folder_id_where_you_want_to_save'}
```
- Create a monthly trigger to launch `attachement_management()`to verify and organize all your files


## Functions
- Open your G-mails and search for the e-mail (threads) received from the contacts in the dictionary
- Open your G-drive and look for the parent folder
- Retrieve the month & year of each message in the thread
- Check if the `year` folder exists; if not, the script will create it.
- Inside the year folder, the script will check if the `month - year` subfolder exists; if not it will create it
- Inside the subfolder, the script will check if `month/year - Name of file` exists; else It will import it from the e-mail and rename it that way

## 🚀 Author
[Skander Boudawara](https://www.linkedin.com/in/skanderboudawara/)

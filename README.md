## Sixth Lab Web Design II
This will be the repository that will hold all the source code for Web Design II sixth lab

## Lab 6 Diseno Web II
Este va a ser el repositorio que va a contener todo el codigo fuente para el sexto lab de diseno web II

## HOW TO RESTORE MONGODB DUMP IN REPOSITORY

1. clone this repository
2. change directory to root of this project
3. restore the dump with `mongorestore PATH/TO/DUMP` (remember, bson dump is found in dump/ subdirectory)

## HOW TO USE (COMO USAR)

1. clone this repository
2. change directory into root of this project
3. install all necessary npm packages: `npm install` <== this should suffice
4. start the application with ==> `npm start`. Nodemon will make it run in your TTY, listening for any changes
5. perform CRUD actions with the following routes: 
   - [GET] `/productos`
   - [POST] `/productos`
   - [PUT] `/productos/:id`
   - [DELETE] `/productos/:id`

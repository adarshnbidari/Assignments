# Post App

## Contents

1. About
2. Prerequisites
4. Design
3. Usage


## About

1. Commenting system like Hacker News.
2. A user can reply to another user’s comment and that will be a nested comment.
3. Users will be able to create, reply and edit comments.
4. Users will not be allowed to modify another user’s post or comment.

## Prerequisites

1. Latest version of mongoDB database.
2. Node.js installed on your local machine.

## Design 

1. Every post or reply is stored in database with the same structure and with some minor properties added or removed.
2. Each post or reply is identified by its unique post_id , which is useful for retireval or manipulation of data at O(1) time.
3. The main post or reply will have comments property which is an array consisting  of comments in the form of post_id.
4. Recent post will be retrieved first.

## Usage

1. Go to the app folder and run command as shown below

```
npm install
node index.js 
```
2. Visit http://localhost to run the application.


# Note

1. You can run both backend and frontend separatly.
2. To run separatly open fullstack folder. 
3. In frontend folder run
```
npm install
npm start
```
4. Don't close the previous terminal.
5. Now go back and open backend folder at root of the fullstack folder.
6. In Backend folder run
```
node index.js
```
7. Visit http://localhost:3001 to run the application.




# **Thank you** &nbsp; &nbsp; :heart:



            

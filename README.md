# WT_CW2_00016885

## Student ID: 00016885

This project is a web application designed for event management. It allows users to perform CRUD (Create, Read, Update, Delete) operations on event data.

## Tech Stack:

## Frontend:
Framework: Bootstrap
Template Engine: Pug-for generating HTML views dynamically based on data.
HTTP Client: Axios (both CDN and installed package)
Backend:
Framework: Express - for building structured server-side app, controlling incoming requests and responses effectively
Package Manager: npm
Other Packages:
Nodemon - Restarts the server automatically when a file is changed.
body-parser - parsing request bodies
express-validator -for validating input

## Folder Structure:
(Note: This project uses a custom folder structure chosen for developer comfort.)
root-directory:
/data - stores the database file: /data/cw_db.json
/public - stores scripts: public/js and css: public/css used for the frontend
controllers - controllers for handling of the logic of a specific API route
routes - folder for web: /routes/web and api: /routes/api routes
utils - reusable utility functions
views - web pages
/.gitignore - files you want git to ignore e.g: node_modules
/.app.js - main file for listening to the server and for application setup config

## Installation:

Clone the following repository: https://github.com/00016885/WT_CW2_00016885.git

Install dependencies using: npm install.
## Running the Application:

Start the development server using: npm start. This will launch the application using Nodemon and automatically restart upon file changes.


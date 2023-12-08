
require('dotenv').config();
// require('dotenv'): Imports the 'dotenv' module in a Node.js application.
// .config(): Invokes the config function from the 'dotenv' module.
// .env created for ignore from the git it is a npm module

const express = require('express');
// const express: Declares a constant variable named 'express'.
//  require('express'): Assigns the 'express' module to the variable, making Express functionalities available for use.

const mongoose = require('mongoose');
// const mongoose: Declares a constant variable named 'mongoose'.
// = require('mongoose'): Assigns the 'mongoose' module to the variable, allowing the use of Mongoose, an Object Data Modeling (ODM) library for MongoDB.

const mongoString = process.env.DATABASE_URL;

// const mongoString: Declares a constant variable named 'mongoString'.
// = process.env.DATABASE_URL;: Assigns the value of the 'DATABASE_URL' environment variable to the 'mongoString' variable.

mongoose.connect(mongoString);
// mongoose.connect: Calls the connect method provided by the Mongoose library.
// (mongoString): Passes the MongoDB connection string, stored in the variable 'mongoString', as an argument to the connect method.

const database = mongoose.connection;
// Declares a constant variable named 'database'.
// mongoose.connection: Refers to the connection object provided by the Mongoose library

database.on('error', (error) => {
    console.log(error)
})
/**database.on('error', (error) => { ... }): This code sets up an event listener
 *  for the 'error' event on the database object. */

database.once('connected', () => {
    console.log('Database Connected');
})

// ONCE
/**It registers a listener function for a specific event to be executed only once the event occurs. After the event is emitted and the listener function runs,
 *  it's automatically removed as an event listener. */

(express()).use(express.json()); 
// (express()): This initializes an instance of an Express application.

/**.use() method, which is an Express method for setting up middleware functions to process incoming requests. */

/*express.json() is a built-in middleware provided by Express. 
It specifically parses incoming request bodies that are in JSON format.*/

(express()).listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./routes/routes');
// The require() function in Node.js is used to include modules that have been exported from other files or modules. Whatever is exported from 
// './routes/routes' will be assigned to the routes variable, making its functionality available for use in the current file.


(express()).use('/api', routes)

// app: This likely refers to an instance of the Express application.
// use('/api', routes): This sets up middleware in your Express application.

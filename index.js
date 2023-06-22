const express = require('express');
const fs = require('fs');
// const cors = require('cors');
// const morgan = require('morgan');
const app = express();
// const router = express.Router();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(morgan("dev"));
app.use(globalMiddleware);
app.use(require("./route.js"));

// ! router is one kind of globalMiddleware.which is used to instead of app. method in routing or api point






const port = 3000;
app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});

// function handler(req,res,next) {
//    //  read request/*  */
//    // process request
//    // response back
// }

// ! responsibilities of a middleware:

/* 
- handle common tasks
- request logs
- filter request
- filter response
- modify or reshape request
- response bad request
- pass requests to next middleware or response handler
- validate request body 
- authenticate or authorize request

*/

// function middleware(req, res, next){

//   next();

// }

function globalMiddleware(req, res, next) {
   console.log('global middleware', `${req.method} ${req.url}`);

   if (req.query.bad) {
      return res.status(404).send('Bad Request');

      // url query korle ?bad=true dile "bad request" ata return korbe
   }

   next();
}

// ? GET POST DELETE PATCH PUT REQUEST

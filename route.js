const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
   console.log(req.url);
   console.log(req.secure);

   fs.readFile('./index.html', (err, data) => {
      //! fs.readfile render indexedDB.html file in browser
      if (err) {
         console.error(err);
         res.send('Error reading');
      } else {
         res.write(data);
         res.end();
      }
   });
});

router.get('/about', (req, res) => {
   res.send(
      `
        
  <!DOCTYPE html>
  <html lang="en">
  <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
  </head>
  <body>
       <div>
            <h1>hello express-101 </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ipsa quo, vero vel expedita vitae quisquam velit officiis beatae itaque recusandae voluptatem sapiente maxime, obcaecati esse illum debitis doloribus? Reprehenderit eveniet error harum ea quod officia repudiandae! Sunt molestiae enim quos id vero iusto possimus modi tempora reprehenderit. Deleniti.</p>
       </div>
  </body>
  </html>
  
  
  
  
     `,
   );
});

router.get('/welcome', () => {
   res.send('Welcome');
});

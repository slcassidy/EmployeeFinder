const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//   Direct location with .html file located and can get to all items in public
// app.use(express.static(path.join(__dirname, './app/public')));

// Testing how to get to the folder where the home html was located
// app.get('/home', function (req, res) {
//     res.sendFile(path.join(__dirname,'./app/public/home.html'));
//   });





// Setting up routes
require('./app/public/routing/apiRoutes.js')(app);
require('./app/public/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`);
})
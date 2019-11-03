const fs = require('fs');
const chalk = require('chalk');
const express = require('express'); // function
const app = express();
const PORT = 9090;
var multer  = require('multer');
const upload = multer({
    storage: fileStorages
});

//import controller
var profileController = require('.routes/profile.js');

app.use(express.json());
app.use(express.urlencoded());
app.use('/public', express.static('public'));

app.post('/profile/register', upload.single('avatar'),profileController.register);
app.post('/profile/upload-pictures', upload.array('picture',5), profileController.uploadPictures);





// Start the app on pre defined port number
app.listen(PORT, function() {
	console.log("Application has started and running on port: ",chalk.blue(PORT));
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});
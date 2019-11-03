const ProfileController = {};
const Model = require('./../models/Books.js');

ProfileController.register = function(request, response) {
    console.log(request.body);
    console.log(request.files, request.file);

    return response.render('avatar',{
        success : true,
        message: "successfully uploaded",
        data: request.file
    });
}
ProfileController.uploadPictures = function(req,res){
    console.log(request.files);
    console.log(request.body);

    return response.json({
        status:true
    });
}
    
module.exports = BookController;
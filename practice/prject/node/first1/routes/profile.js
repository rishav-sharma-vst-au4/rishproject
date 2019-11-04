const ProfileController = {};
const Model = require('./../models/Books');

ProfileController.register = function(request,response) {
    console.log(request.body);
    console.log(request.files);

    return response.json({
        success: true,
        message: "Successfully uploaded",
        data: request.file
    });
}
ProfileController.uploadPictures = function(request, response) {
    console.log(request.flies);
    console.log(request.body);
    return response.json({
        status: true
    });
}
ProfileController.uploadFiles = function(request, response) {
    console.log(request.flies);
    console.log(request.body);
    return response.json({
        status: true
    });
}
module.exports= ProfileController;

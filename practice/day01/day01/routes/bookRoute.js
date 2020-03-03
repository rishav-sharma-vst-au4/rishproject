const bookController = {};

const data = require('./../public/data.json');
bookController.result = function(req, res){

    var input = req.query;
    StorageData = [];
    data.forEach(function(data){

        if(input.result ===data.language){
           // console.log("matched");
           StorageData.push(data)
        }

    });

    return res.render('result',{
        data: StorageData
    });
}



module.exports = bookController;
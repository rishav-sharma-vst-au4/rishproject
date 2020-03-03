const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const csvtojson = require('csvtojson');
const PORT = 9090;




app.use(express.json());
app.use(express.urlencoded());
app.use('/static', express.static('public'));

//Database connection


var url ='mongodb://localhost:27017';
csvtojson().fromFile("./public/data.csv").then(csvData => {
    console.log(csvData);

    MongoClient.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;
        
        client.db("eagle-hemant-soni").collection("users")
          .insert(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
      
    );
  });
   var db =null;
  MongoClient.connect(url, function(error, client){
      if(error){
          throw error;
      }
      db = client.db('eagle-hemant-soni');
  });

  app.post('/users', function(req,res){
    var data = req.body;
  var collection = db.collection('users');
  collection.insertOne(data, function(error, response){
      if(error){
          return res.send({
              status: false,
              message: "failed to update"
          });
        }
        return res.send({
            status: true,
            message: "successfully created user",
            
        });
      });
  });

  
  
  app.get('/users', function(req,res){
    var collection = db.collection('users');
    collection.find({}).toArray(function(error, response){
        if(error){
            return res.send({
                status: false,
                message: "failed"
            });
          }
          return res.send({
              status: true,
              message: "successfully retrive",
              data:response
          });
        });
    });

app.put('/users', function(req,res){
      var updateData = req.body.updateData;
      var identifier = req.body.identifier;

    var collection = db.collection('users');

    collection.update({
        name: identifier
    },{
        $set: updateData
      }, function(error, response){
      console.log(error, response);
      if(error){
          return res.send({
              status: false,
              message: "failed to update"
          });
        }
        return res.send({
            status: true,
            message: "successfully updated",
            
        });
  });
});
    
     


const hbs = exphbs.create({
  extname: '.hbs'

});

app.engine('.hbs', hbs.engine );
app.set('view engine', '.hbs');

app.get('/',function(req,res){
  db.collection('users').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('homepage', {
        layout: false,
        users: result 
  
      });
  });   
}); 

app.listen(PORT, function(){
  console.log("Application has started and running on port:", PORT);
}).on('error', function(error){
  console.log("Unable to start app>>", error);
});
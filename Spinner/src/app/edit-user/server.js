
var exress = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");
var db = mongo.connect("jdbc:postgresql://lansdon-rev2102.chdzmgelqjjw.us-east-2.rds.amazonaws.com:5432/postgres?currentSchema=spinner", function(err, response){
    if (err){console.log( err);}
    else{ console.log('Connected to '+db,' + ', response);}
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
var currentSchema = mongo.Schema;
var model = mongo.model('profile_pic', currentSchema, 'profile_pic');

app.post("http://localhost:4200/edit-profile/SaveProfilePic", function(req,res){
    var mod = new model(req.body);
    if(req.body.mode == "Save")
    {
        mod.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Picture has been Saved!!"});
            }
        });
    }
    else{
        model.findByIdAndUpdate(req.body.id, { name: req.body.name, pic: req.body.pic},
            function(err,data){
            if (err){
                res.send(err);
            }
            else{
                res.send({data: "Picture has been Updated!!"});
            }
            });
            
    }
}
);
app.post("http://localhost:4200/edit-profile/deleteProfilePic", function(req,res){
    model.remove({ _id: req.body.id }, function(err){
        if (err){
            res.send(err);
        }else{
            res.send({data: "Picture has been Deleted!!"});
        }
    });
})

app.get("http://localhost:4200/edit-profile/getProfilePic", function(req,res){
    model.find({}, function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data)
        }
    });
})

app.listen(4200, function(){
    console.log('We are listening on 4200 in server.js')
})
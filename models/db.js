const mongoose = require("mongose");

mongoose.connect('mongodb+srv://buddhika:Sa**1994@cluster0-8gxra.mongodb.net/test?retryWrites=true',{useNewUrlPaser:true},(err)=>{
    if(!err){ console.log('MongoDb  Connected Succefully')}
    else{  console.log('Error in DB Connection :' + err  )}
});



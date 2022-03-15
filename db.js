const mongoose = require('mongoose'); 

function _connect (){
    const MONGO_HOST = "localhost";
    const MONGO_DB = "prestamos"; 

    const URI = `mongodb://${MONGO_HOST}/${MONGO_DB}`;
    mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true}) 
        .then(
            ()=> {
                console.log("conection on"); 
            },
            (err) => {
                console.log("conection error",err); 
            },
        )
}

module.exports=_connect; 
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/prestamos'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
 
})

const db = mongoose.connection
db.on('error', console.error.bind(console,'error al conectar con mongoDB')) 
db.once('open', function callback(){
    console.log("conectado a mongodb")
})

module.exports = db 



// const mongoose = require('mongoose'); 

// function _connect (){
//     const MONGO_HOST = "localhost";
//     const MONGO_DB = "prestamos"; 

//     const URI = `mongodb://${MONGO_HOST}/${MONGO_DB}`;
//     mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true}) 
//         .then(
//             ()=> {
//                 console.log("conection on"); 
//             },
//             (err) => {
//                 console.log("conection error",err); 
//             },
//         )
// }

// module.exports=_connect; 
//vamos a requerir a express
const express = require('express'); 
const app = express()
//const _connect = require("./db")
const db= require('./db') 

//mongo conection 
//_connect();  

app.set('view enigme', 'ejs')


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

// const nombre = require('./routers/nombre')  
// app.use(nombre) 

//ruta de prueba
app.get('/', (req,res)=>{
    res.send('hola señores y señoras') 
})

app.listen(3000, () => {
    console.log('server on en http://localhost:3000') 
})
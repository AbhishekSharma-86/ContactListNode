const express = require('express');
const port = 3500;
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
var ContactList = [
    {
        name: "Abhishek Sharma",
        phone: "11919298",
    },
    {
        name: "Tony stark",
        phone: "56562737"
    }
];
// app.use(express.static(path.join(__dirname, '../views')));
app.get('/', (req, res)=>{
    return res.render('home',{
        title: "Home Page",
        contact_list: ContactList
    });
    // res.sendFile(path.join(__dirname,'../index.html'));
})
app.listen(port, (err)=>{
    if(err){
        console.log("Error ",err);
    }
    console.log('server is up and running');
})
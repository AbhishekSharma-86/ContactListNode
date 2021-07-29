const express = require('express');
const port = 3500;
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded());
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
});
app.post('/create-contact', (req, res)=>{
    // return res.render('/practice');
    console.log(req.body);
    ContactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
    return res.redirect('/');
})
app.listen(port, (err)=>{
    if(err){
        console.log("Error ",err);
    }
    console.log('server is up and running');
})